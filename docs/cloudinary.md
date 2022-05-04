# Cloudinary

Cloudinary uses a `segment` in the request url instead of a more common `querystring` approach.

[Transformations Guide](https://cloudinary.com/documentation/image_transformations)

## URL structure

```html
https://res.cloudinary.com/<cloud_name>/<asset_type>/<delivery_type>/<transformations>/<version>/<public_id>.<extension>
```

| segment | info |
| ------- | ---- |
| cloud_name | Your account's token
| asset_type | one of `image`, `video`, `raw`
| delivery_type | one of `upload`, `fetch`, amongst [others](https://cloudinary.com/documentation/image_transformations#delivery_types) less common.
| transformations | comma-separated list of actions to apply to the image
| version | some kind of cache-breaker
| public_id | `id` to your image
| extension | a way to specify the image format

## Usage

If you want to stick to a "direct" method of applying transformations to your image, you can just put the action values into made-up component props. For example:

```html
<Ixmage provider="cloudinary" src="demo/wall" token="batousai"
  p1="w_300" p2="h_200" p3="c_fill"
/>
```

The above will make a URL like:

```html
<img src="https://res.cloudinary.com/batousai/image/upload/w_300,h_200,c_fill/demo/wall" />
```

![wall-cloudinary](https://res.cloudinary.com/batousai/image/upload/w_300,h_200,c_fill/demo/wall)

The component `props` are destructed and any values are included into a comma-separated list of transformations.

:warning: Because `props` are forwarded to the cloudinary transformation logic (except for a few mentioned below in _Hacked props_), using a bogus value will most likely break the request to cloudinary because of some "unknown" value cloudinary tries to parse/identify.


## Standardization

As an effort for "standardization", some `props` have been worked on to be able to instead do something like:

```html
<Ixmage provider="cloudinary" src="demo/wall" token="batousai"
  width="300" height="200" crop="fill"
/>
```

which will produce the same URL.

### Hacked props

| prop | turns into |
| ---- | ---------- |
| width \| w | >> `w_<value>`
| height \| h | >> `h_<value>`
| flip | >> `a_vflip`
| flop | >> `a_hflip`
| bgc | >> `b_rgb:<value>`
| namedbgc | >> `b_<value>`
| dpr | >> `d_<value>`
| blur | >> `e_blur:<value>`
| brightness | >> `e_brightness:<value>`
| grayscale | >> `e_grayscale`
| hue | >> `e_hue:<value>`
| pixelate | >> `e_pixelate:<value>`
| saturation | >> `e_saturation:<value>`
| sepia | >> `e_sepia:<value>`
| format | >> `f_<value>`; if ommited, defaults to `f_auto`
| quality | >> `q_<value>`; if ommited, defaults to `q_auto`
| crop | >> `c_<value>`

### Special props

| prop | info |
| ---- | ---- |
| token \| cloudname | your cloudinary account token
| type | URL segment `asset_type`; defaults to `image`
| delivery | URL segment `delivery_type`; defaults to `upload`


