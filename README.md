# Boring Avatars for Solidjs (Work in progress)

Boring avatars is a tiny JavaScript Solidjs library that generates custom, SVG-based avatars from any username and color palette.
<a href="https://www.npmjs.com/package/@totem.org/solid-boring-avatars">

![hi](https://badgen.net/npm/v/@totem.org/solid-boring-avatars)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</a>

![boring avatars preview](https://github.com/totem-technologies/solid-boring-avatars/blob/master/solid-boring-avatars.jpg?raw=true)

## Install

```
npm install @totem.org/solid-boring-avatars
```

## Usage

```jsx
import Avatar from '@totem.org/solid-boring-avatars'
;<Avatar
  size={40}
  name="Maria Mitchell"
  variant="marble"
  colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
/>
```

### Props

| Prop    | Type                                                                   |
| ------- | ---------------------------------------------------------------------- |
| size    | number or string, `40px` (default)                                     |
| square  | boolean: `false` (default)                                             |
| title   | boolean: `false` (default)                                             |
| name    | string                                                                 |
| variant | oneOf: `marble` (default), `beam`, `pixel`,`sunset`, `ring`, `bauhaus` |
| colors  | array of colors                                                        |
