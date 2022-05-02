export function getImage (options) {
  const baseUri = `https://cdn.sanity.io/images/${options.token || 'no-token'}/${options.dataset || 'production'}`;
  let src = options.src;
  let xfs = '?v=astro';
  if (!options.format) options.auto = 'format';
  options.w = options.w || options.width;
  delete options['width'];
  options.h = options.h || options.height;
  delete options['height'];
  
  delete options['src'];
  delete options['token'];
  delete options['provider'];

  for (let prop in options) {
    xfs += `&${prop}=${options[prop]}`;
  }

  return baseUri + '/' + src + xfs;
}
