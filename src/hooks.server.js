// The English edition must not be announced as Mongolian to screen readers.
export async function handle({ event, resolve }) {
  const lang = /\/en(\/|$)/.test(event.url.pathname) ? 'en' : 'mn';
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', lang)
  });
}
