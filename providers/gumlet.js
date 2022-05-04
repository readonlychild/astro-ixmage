export function getImage (options) {
  const baseUri = `https://${options.token}.gumlet.io`;
  let src = options.src;
  delete options['src'];
  let xfs ='?v=astro';

  options.w = options.w || options.width || '';
  delete options['width'];
  options.h = options.h || options.height || '';
  delete options['height'];

  for (let prop in options) {
    if (options[prop]) {
      xfs += `&${prop}=${options[prop]}`;
    }
  }

  return baseUri + '/' + src + xfs;
}
