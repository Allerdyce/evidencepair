// EvidencePair vendor site. Static output only (spec 30 §3, §4).
// No plugins that fetch anything at build time. No dates taken from the clock,
// so two builds of one commit are byte-identical (SITE-AC-14).

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ assets: 'assets', CNAME: 'CNAME' });

  eleventyConfig.addCollection('apps', (api) =>
    api.getFilteredByGlob('content/apps/*.md').sort((a, b) => a.data.name.localeCompare(b.data.name)),
  );
  eleventyConfig.addCollection('docs', (api) =>
    api.getFilteredByGlob('content/docs/*/*.md').sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99)),
  );

  // Dates come from front matter, never from the build clock.
  eleventyConfig.addFilter('isoDate', (d) => {
    if (d === undefined || d === null) throw new Error('isoDate: missing date');
    const date = d instanceof Date ? d : new Date(d);
    return date.toISOString().slice(0, 10);
  });
  eleventyConfig.addFilter('longDate', (d) => {
    const date = d instanceof Date ? d : new Date(d);
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  });

  // A statement the site cannot yet make truthfully. Rendered, and marked, while
  // the site is a draft; a build with `draft: false` refuses to publish it.
  eleventyConfig.addShortcode('pending', function (text, ref) {
    const draft = this.ctx?.site?.draft;
    if (draft !== true) {
      throw new Error(`Pending statement in ${this.page?.inputPath}: "${text}". Resolve it (see HUMAN-TASKS.md${ref ? ' ' + ref : ''}) before publishing.`);
    }
    const suffix = ref ? ` <span class="pending-ref">(${ref})</span>` : '';
    return `<p class="pending" data-pending="1"><strong>Pending review:</strong> ${text}${suffix}</p>`;
  });

  // Heading ids for in-page links, derived from the heading text only, so the
  // output stays deterministic. Headings that already carry an id are left alone.
  eleventyConfig.addTransform('heading-ids', function (content) {
    if (!(this.page?.outputPath ?? '').endsWith('.html')) return content;
    const seen = new Set();
    return content.replace(/<h([23])>([^<]*)<\/h\1>/g, (m, level, text) => {
      let id = text.toLowerCase().replace(/&[a-z]+;|[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
      let unique = id, n = 2;
      while (seen.has(unique)) unique = `${id}-${n++}`;
      seen.add(unique);
      return `<h${level} id="${unique}">${text}</h${level}>`;
    });
  });

  // Any table not already inside a labelled wrapper gets one, so a wide table
  // scrolls inside a keyboard-focusable region at phone widths (WCAG 2.1.1).
  eleventyConfig.addTransform('table-wrap', function (content) {
    if (!(this.page?.outputPath ?? '').endsWith('.html')) return content;
    return content.replace(/(<div class="table-wrap"[^>]*>\s*)?<table>([\s\S]*?)<\/table>(\s*<\/div>)?/g, (m, open, body, close) =>
      open ? m : `<div class="table-wrap" tabindex="0" role="region" aria-label="Table">\n<table>${body}</table>\n</div>`);
  });

  eleventyConfig.setServerOptions({ showAllHosts: false });

  return {
    dir: { input: 'content', includes: '../templates', data: '../data', output: '_site' },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: ['md', 'njk', 'html'],
  };
}
