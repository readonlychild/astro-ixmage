import config from './Ixmage.json';
import {getImage as ixmage} from './providers/ixmage.js';
import {getImage as cloudinary} from './providers/cloudinary.js';
import {getImage as sanity} from './providers/sanity.js';

let providers = {};
providers.ixmage = ixmage;
providers.cloudinary = cloudinary;
providers.sanity = sanity;

export { providers, config };
