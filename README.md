# :rocket: astro-ixmage :framed_picture:

~~Astro component that makes working with [ixmage.com](https://www.ixmage.com) easier.~~

This component has been refactored to allow usage of other "Image CDN" solutions.

The requirement that permits a service to be able to fit into this component, as a new provider, is that the service can transform images using a `querystring` API.

i.e. `&width=200&height=120` or `../w_200,h_120/..` or similar.

# Providers

The provider model only needs to implement and export one function `getImage(options)`; this function returns the correct URL to the image.

Current functional providers:

- [ixmage.com](https://www.ixmage.com) the first implemented provider ~ April 14.
- [cloudinary](https://www.cloudinary.com) v1.0 ~ April 30.
  - [more details](./docs/cloudinary.md)
- [sanity.io](https://sanity.io) ~ April 30.
- [imgix.com](https://imgix.com) ~ May 3.
- [imagekit.io](https://imagekit.io) ~ May 3.
- [gumlet.com](https://www.gumlet.com) ~ May 3.


:cupcake: This component will...

- Most of these services will put your images on a CDN, 
- optimize images for size, 
- even turn them into `webp` when appropriate.

# Installation

```js
npm install astro-ixmage --save-dev
```

This is a build-time component that will render out `<img>` markup to the client.

# Usage

Import into your other **components** or **pages**  
_(or `.md` files using the `setup` field)_

## Setup of default values

You are required to create a file named `ixmage.config.mjs` in your project root folder.  The file will be a sibling to `astro.config.mjs`

The file contents will be

```js
export default {
  "provider": "ixmage"
};
```
where you can specify the default `provider` like `ixmage` or `cloudinary`, etc. Anytime you use the Ixmage component without specifying the `provider` prop, it will default to this value.

## frontmatter setup

### Astro Components

```js
import { Ixmage } from 'astro-ixmage';
```

#### In your component body

```html
<Ixmage token="your-token" src="https://image-url.format" alt="An optimized image" />
```

### Markdown Files

```js
setup: |
  import { Ixmage } from 'astro-ixmage';
```

#### In your markdown content

```js
<Ixmage token="your-token" src="https://image-url.format" alt="An optimized image" />
```

# Examples

The examples below are using an image URL to the respective service.

To see a page using the actual npm package for **astro-ixmage** go to this [blog post](https://www.readonlychild.com/astro-ixmage/tester).

## Original image<small>, sized 320 width</small>

![original](https://cdn.ixmage.com/v2/TQKkCpGYGK/bucket1/demo/wall.jpg?w=320)


## ixmage

My image accessed thru the [ixmage](https://www.ixmage.com) service

```html
<Ixmage token="TQKkCpGYGK" w="200" h="200"
  bgc="_00ff00" flop={true}
  src="bucket1/demo/wall.jpg"
  alt="demo wall image"
/>
```

![using-ixmage](https://cdn.ixmage.com/v2/TQKkCpGYGK/bucket1/demo/wall.jpg?v=astro&bgc=_00ff00&w=200&h=200&flop=true)

## cloudinary

I uploaded the same image to my [cloudinary](https://www.cloudinary.com) account. Initally, it gave my image a name with an id, but I was able to rename it just "wall.jpg"

```html
<Ixmage token="batousai" width="200" height="200"
  provider="cloudinary" bgc="00ff00" crop="lpad" flop={true} 
  src="demo/wall.jpg"
  alt="demo wall image"
/>
```

![using-cloudinary](https://res.cloudinary.com/batousai/image/upload/w_200,h_200,a_hflip,b_rgb:00ff00,f_auto,q_auto,c_lpad/demo/wall.jpg)


## sanity.io

I also uploaded the image to a [sanity.io](https://www.sanity.io/) account. It gave it a cryptic name, and I could not change it. Also, I could not get the background color to work despite following their documentation.

Sanity gave me a UID to use for my account, which I am using as `token`.

```html
<Ixmage token="qg0lypr0" w="200" h="200"
  provider="sanity" bgc="ff00ff00" flip="h" fit="fill"
  src="4450124c33af1267f4def68cc220c7c0ffb56185-1200x900.jpg"
  alt="demo wall image"
/>
```

![using-sanity](https://cdn.sanity.io/images/qg0lypr0/production/4450124c33af1267f4def68cc220c7c0ffb56185-1200x900.jpg?v=astro&w=200&h=200&bg=ff00ff00&flip=h&fit=fill&auto=format)


## imgix

```html
<Ixmage token="ixmage" width="200" height="200"
  provider="imgix" 
  fill-color="lime" flip="h" fit="fill" fill="solid"
  src="demo/wall.jpg"
  alt="demo wall image"
/>
```

![using-imgix](https://ixmage.imgix.net/demo/wall.jpg?fit=fill&fill=solid&fill-color=lime&width=200&height=200&flip=h)


## gumlet

```html
<Ixmage token="ixmage" width="200" height="200"
  provider="gumlet" 
  fill-color="lime" flip="h" mode="fill" fill="solid"
  src="demo/wall.jpg"
  alt="demo wall image"
/>
```

![using-gumlet](https://ixmage.gumlet.io/demo/wall.jpg?mode=fill&fill=solid&fill-color=lime&width=200&height=200&format=auto&flip=h)


## imagekit

```html
<Ixmage token="ixmage" width="200" height="200"
  provider="imagekit" bg="lime" flip="h" cm="pad_resize"
  src="demo/wall_qdUth8otg.jpg"
  alt="demo wall image"
/>
```

![using-imagekit](https://ik.imagekit.io/ixmage/demo/wall_qdUth8otg.jpg?tr=w-200,h-200,cm-pad_resize,bg-lime)


# To Dos

- [X] `srcset` for image switching between devices
- :thinking:


