export function getImage (options) {
  const baseUri = `https://ik.imagekit.io/${options.token}`;
  let src = options.src;
  delete options['src'];
  delete options['token'];
  let xfs = [];

  options.w = options.w || options.width || '';
  delete options['width'];
  options.h = options.h || options.height || '';
  delete options['height'];

  for (let prop in options) {
    if (options[prop]) {
      xfs.push(`${prop}-${options[prop]}`);
    }
  }

  return baseUri + '/' + src + `?tr=${xfs.join(',')}`;
}
