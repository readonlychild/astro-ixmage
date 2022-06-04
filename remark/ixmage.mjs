import {visit} from 'unist-util-visit';

let token = 'astro';
let optIn = false;

function transformer(ast) {
  visit(ast, 'image', visitor)

  function visitor(node) {
    const imgtype = getImgType(node.url);
    if (imgtype !== 'external') return;
    console.log(JSON.stringify(node,null,2));
    const altText = node.alt;
    
    let optslen = altText.indexOf('ixmage{');
    let opts = {};
    opts.optimize = !optIn;

    if (optslen >= 0) {
      let pieces = altText.split('ixmage{');
      if (pieces.length === 2) {
        let obj = '{' + pieces[1];
        opts = JSON.parse(obj);
        opts.optimize = !optIn;
        if (optIn) opts.optimize = true;
        node.alt = pieces[0].trim();
      }
    } else if (node.title) {
      try {
        opts = JSON.parse(node.title);
        opts.optimize = !optIn;
        if (optIn) opts.optimize = true;
        node.title = node.alt;
      } catch (parseErr) {
        console.log(parseErr.message);
        opts = { optimize: !optIn };
      }
    }
    let url = ''; //node.url;
    if (opts.optimize && opts.ignore) opts.optimize = false;
    if (opts.optimize) {
      let xf = 'v=astro-md-220602';
      opts.w = opts.w || 1200;
      xf += `&w=${opts.w}`;
      if (opts.h) xf += `&h=${opts.h}`;
      if (opts.bg) xf += `&bgc=${opts.bg}`;
      if (opts.q) xf += `&q=${opts.q}`;
      if (opts.flip) xf += '&flip=1';
      if (opts.flop) xf += '&flop=1';
      if (opts.gray) xf += '&grey=1';
      url = `https://cdn.ixmage.com/v2/${token}/${node.url}?${xf}`;
      node.url = url;
    }
  }
}

function getImgType (url) {
  // any string that starts with //
  if (/^\/\/(.*)/.exec(url)) {
    return 'external'
  }
  // any string that starts with /
  if (/^\/(.*)/.exec(url)) {
    return 'relative'
  }
  // any string that starts with http
  if (/^http(.*)/.exec(url)) {
    return 'external'
  }

  // catch all the rest
  return 'unknown';
}

function plugin(options) {
  if (options.token) token = options.token;
  if (options.optIn) optIn = options.optIn;
  return transformer
}

export default plugin
