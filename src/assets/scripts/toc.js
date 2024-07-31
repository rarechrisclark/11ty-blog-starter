/** Adds a click event listener to the TOC (table of contents) */

document.addEventListener('DOMContentLoaded', () => {
  const tocToggler = document.getElementById('tocToggler');
  const tocContents = document.getElementById('tocContents');

  tocToggler.addEventListener('click', () => {
    tocContents.classList.toggle('show');
    tocToggler.classList.toggle('collapsed');

    if (tocContents.classList.contains('show')) {
      tocToggler.ariaExpanded = 'true';
    } else {
      tocToggler.ariaExpanded = 'false';
    }
  });
});
