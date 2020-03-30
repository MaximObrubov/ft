
function parseUrl(url) {
  const a = document.createElement('a');
  a.setAttribute('href', url);
  return a;
}