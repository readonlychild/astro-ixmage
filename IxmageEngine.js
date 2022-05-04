import config from './../../ixmage.config.mjs';
import {getImage as ixmage} from './providers/ixmage.js';
import {getImage as cloudinary} from './providers/cloudinary.js';
import {getImage as sanity} from './providers/sanity.js';
import {getImage as imgix} from './providers/imgix.js';
import {getImage as imagekit} from './providers/imagekit.js';
import {getImage as gumlet} from './providers/gumlet.js';

let providers = {};
providers.ixmage = ixmage;
providers.cloudinary = cloudinary;
providers.sanity = sanity;
providers.imgix = imgix;
providers.imagekit = imagekit;
providers.gumlet = gumlet;

export { providers, config };
