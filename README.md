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
- [sanity.io](https://sanity.io) ~ April 30.

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

Import into your other components or pages  
_(or `.md` files using the `setup` field)_

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

Original image, sized 200 width:

![original](https://cdn.ixmage.com/v2/TQKkCpGYGK/bucket1/demo/wall.jpg?w=200)

## ixmage

My image accessed thru the [ixmage](https://www.ixmage.com) service

```html
<Ixmage cls="me-2" token="TQKkCpGYGK" w="200" h="200"
  bgc="_00ff00" flop={true}
  src="bucket1/demo/wall.jpg"
  alt="demo wall image"
/>
```

![using-ixmage](https://cdn.ixmage.com/v2/TQKkCpGYGK/bucket1/demo/wall.jpg?v=astro&bgc=_00ff00&w=200&h=200&flop=true)

<Ixmage cls="me-2" token="TQKkCpGYGK" w="200" h="200" bgc="_00ff00" src="bucket1/demo/wall.jpg" flop={true} alt="demo wall image" />

## cloudinary

I uploaded the same image to my [cloudinary](https://www.cloudinary.com) account. Initally, it gave my image a name with an id, but I was able to rename it just "wall.jpg"

```html
<Ixmage cls="me-2" token="batousai" width="200" height="200"
  provider="cloudinary" bgc="00ff00" crop="lpad" flop={true} 
  src="demo/wall.jpg"
  alt="demo wall image"
/>
```

![using-cloudinary](https://res.cloudinary.com/batousai/image/upload/w_200,h_200,a_hflip,b_rgb:00ff00,f_auto,q_auto,c_lpad/demo/wall.jpg)

<Ixmage cls="me-2" token="batousai" width="200" height="200" bgc="00ff00" src="demo/wall.jpg" flop={true} provider="cloudinary" crop="lpad" alt="demo wall image" />

## sanity.io

I also uploaded the image to a [sanity.io](https://www.sanity.io/) account. It gave it a cryptic name, and I could not change it. Also, I could not get the background color to work despite following their documentation.

```html
<Ixmage cls="me-2" token="qg0lypr0" w="200" h="200"
  provider="sanity" bgc="ff00ff00" flip="h" fit="fill"
  src="4450124c33af1267f4def68cc220c7c0ffb56185-1200x900.jpg"
  alt="demo wall image"
/>
```

![using-sanity](https://cdn.sanity.io/images/qg0lypr0/production/4450124c33af1267f4def68cc220c7c0ffb56185-1200x900.jpg?v=astro&w=200&h=200&bg=ff00ff00&flip=h&fit=fill&auto=format)

<Ixmage cls="me-2" token="qg0lypr0" w="200" h="200" bg="ff00ff00" src="4450124c33af1267f4def68cc220c7c0ffb56185-1200x900.jpg" flip="h" provider="sanity" fit="fill" alt="demo wall image" />






# To Dos

- [ ] `srcset` for image switching between devices
- :thinking:


