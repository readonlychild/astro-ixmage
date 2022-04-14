# astro-ixmage

Astro component that makes working with [ixmage.com](https://www.ixmage.com) easier.

## Installation

```js
npm install astro-ixmage --save-dev
```

This is a server-side component that will render out `<img>` markup to the client.

## Usage

Import into your other components or pages

### frontmatter setup

```js
import { Ixmage } from 'astro-ixmage';
```

### In your component body

```html
<Ixmage token="your-token" src="https://image-url.format" alt="An optimized image" />
```

## Examples


## More Documentation

[Detailed Post](https://www.readonlychild.com/blog/ixmage-for-astro/)