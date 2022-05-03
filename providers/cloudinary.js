export function getImage (options) {
  let baseUri = `https://res.cloudinary.com/${options.token || options.cloudname}`;
  // options.type image | video | raw
  baseUri += `/${options.type || 'image'}`;
  // options.delivery upload | private | authenticated | list |fetch | ... | text | asset
  baseUri += `/${options.delivery || 'upload'}`;
  
  let xfs = [];
  if (options.width) {
    xfs.push(`w_${options.width}`);
    delete options['width'];
    delete options['w'];
  }
  if (options.height) {
    xfs.push(`h_${options.height}`);
    delete options['height'];
    delete options['h'];
  }
  if (options.w) {
    xfs.push(`w_${options.w}`);
    delete options['width'];
    delete options['w'];
  }
  if (options.h) {
    xfs.push(`h_${options.h}`);
    delete options['height'];
    delete options['h'];
  }
  if (options.flip) xfs.push(`a_vflip`);
  if (options.flop) xfs.push(`a_hflip`);
  delete options['flip'];
  delete options['flop'];
  if (options.bgc) xfs.push(`b_rgb:${options.bgc}`);
  delete options['bgc']
  if (options.namedbgc) xfs.push(`b_${options.bgc}`);
  delete options['namedbgc'];
  if (options.dpr) xfs.push(`d${options.dpr}`);
  delete options['dpr'];
  if (options.blur) xfs.push(`e_blur:${options.blur}`);
  delete options['blur'];
  if (options.brightness) xfs.push(`e_brightness:${options.brightness}`);
  delete options['brightness'];
  if (options.grayscale) xfs.push(`e_grayscale`);
  delete options['grayscale'];
  if (options.hue) xfs.push(`e_hue:${options.hue}`);
  delete options['hue'];
  if (options.pixelate) xfs.push(`e_pixelate:${options.pixelate}`);
  delete options['pixelate'];
  if (options.saturation) xfs.push(`e_saturation:${options.saturation}`);
  delete options['saturation'];
  if (options.sepia) xfs.push(`e_sepia:${options.sepia}`);
  delete options['sepia'];
  if (options.format) {
    xfs.push(`f_${options.format}`);
  } else { xfs.push('f_auto'); }
  delete options['format'];
  if (options.quality) {
    xfs.push(`q_${options.quality}`);
  } else { xfs.push('q_auto'); }
  delete options['quality'];
  if (options.crop) {
    xfs.push(`c_${options.crop}`);
  } else { xfs.push('c_fill'); }
  delete options['crop'];

  let version = '';
  if (options.version) version = `/${options.version}`;
  delete options['version'];

  let src = options.src;
  delete options['src'];
  delete options['token'];
  delete options['cloudname'];

  for (let prop in options) {
    xfs.push(`${options[prop]}`);
  }

  return baseUri + '/' + xfs.join(',') + version + '/' + src;
}
