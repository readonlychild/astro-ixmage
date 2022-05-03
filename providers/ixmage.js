export function getImage (options) {
  const baseUri = `https://cdn.ixmage.com/v2/${options.token}`;
  let src = options.src;
  delete options['src'];
  let xfs ='?v=astro';
  if (options.format) {
    if (options.format.toLowerCase() === 'jpg') xfs += `&fmt=jpg`;
    if (options.format.toLowerCase() === 'png') xfs += `&fmt=png`;
    if (options.format.toLowerCase() === 'gif') xfs += `&fmt=gif`;
    if (options.format.toLowerCase() === 'webp') xfs += `&fmt=webp`;
  }
  delete options['format'];
  if (options.behavior) {
    if (options.behavior.toLowerCase() === 'extend') xfs += `&extend=1`;
    if (options.behavior.toLowerCase() === 'cover') xfs += `&cover=1`;
  }
  delete options['behavior'];
  xfs += `&bgc=${options.bgc || 'transparent'}`;
  delete options['bgc'];

  for (let prop in options) {
    xfs += `&${prop}=${options[prop]}`;
  }

  return baseUri + '/' + src + xfs;
}
