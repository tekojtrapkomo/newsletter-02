/**
 * use:reveal — heavy fade-up as an element enters the viewport, once.
 * IntersectionObserver only (no scroll listeners). Content stays visible
 * without JS: app.html adds `.js` to <html>, and only then are
 * [data-reveal] elements hidden.
 */
export function reveal(node, delay = 0) {
  node.setAttribute('data-reveal', '');
  node.style.setProperty('--reveal-delay', `${delay}ms`);

  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('is-in');
        io.disconnect();
      }
    },
    { rootMargin: '0px 0px -10% 0px' }
  );
  io.observe(node);

  return { destroy: () => io.disconnect() };
}
