# :rocket: astro-ixmage :framed_picture:

Astro component that makes working with [ixmage.com](https://www.ixmage.com) easier.

## Installation

```js
npm install astro-ixmage --save-dev
```

This is a server-side component that will render out `<img>` markup to the client.

## Usage

Import into your other components or pages  
_(or `.md` files using the `setup` field)_

### frontmatter setup

```js
import { Ixmage } from 'astro-ixmage';
```

### In your component body

```html
<Ixmage token="your-token" src="https://image-url.format" alt="An optimized image" />
```

### Preview token

You can use token `astro` to hit the ground running, and if you see a benefit for your project(s), I ask that you sign up for a free account at [ixmage.com](https://cp.ixmage.com) and `login` with one of the available `OAuth` providers to get your own `token`.

![ixmage auth providers](https://cdn.discordapp.com/attachments/943991815084847175/964255381473857576/unknown.png)



## Examples

### Of output `url`

Mirror version

`https://cdn.ixmage.com/v2/astro/https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/pokemon_icon_139_00.png?w=150&flop=1`

![omastar-mirror](https://cdn.ixmage.com/v2/astro/https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/pokemon_icon_139_00.png?w=150&flop=1)

Un-flopped version

`https://cdn.ixmage.com/v2/astro/https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/pokemon_icon_139_00.png?w=150`

![omastar](https://cdn.ixmage.com/v2/astro/https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon/pokemon_icon_139_00.png?w=150)

Another example

`https://cdn.ixmage.com/v2/TQKkCpGYGK/https://www.readonlychild.com/demo/wall.jpg?w=240`

![image-alias](https://cdn.ixmage.com/v2/TQKkCpGYGK/https://www.readonlychild.com/demo/wall.jpg?w=240)

Same using an `alias`

`https://cdn.ixmage.com/v2/`TQKkCpGYGK`/`bucket1`/demo/wall.jpg?w=240`

:pineapple: Alias `bucket1` has been configured for my personal token `TQKkCpGYGK`

![image-alias](https://cdn.ixmage.com/v2/TQKkCpGYGK/bucket1/demo/wall.jpg?w=240)

The `alias` is resolving "bucket1" to `https://www.readonlychild.com`


## More Documentation :orange_book:

[Detailed Post](https://www.readonlychild.com/blog/ixmage-for-astro/)