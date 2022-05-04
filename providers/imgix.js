export function getImage (options) {
  const baseUri = `https://${options.token}.imgix.net`;
  let src = options.src;
  delete options['src'];
  let xfs ='?v=astro';

  for (let prop in options) {
    xfs += `&${prop}=${options[prop]}`;
  }

  return baseUri + '/' + src + xfs;
}
