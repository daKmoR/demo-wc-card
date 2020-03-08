# <demo-wc-card\>

A content frame that looks like a card with a back and front side.

```js script
import { html } from 'lit-html';
import './demo-wc-card.js';
```

```js story
export const usage = () => {
  return html`
    <demo-wc-card></demo-wc-card>
  `;
};
```

## Installation

```bash
npm i demo-wc-card
```

## Usage

```js
import 'demo-wc-card/demo-wc-card.js';
```

```html
<demo-wc-card></demo-wc-card>
```

## API

You can provide multiple options to adjust the output like so.

### Header

You can give it a different `header` by providing it as a string

```js preview-story
export const header = () => {
  return html`
    <demo-wc-card .header=${'my new header'}></demo-wc-card>
  `;
};
```

### BackSide

You wanna show the back side first? use the `back-side` as an attribute.

```js preview-story
export const backSide = () => {
  return html`
    <demo-wc-card back-side></demo-wc-card>
  `;
};
```

## Variations

See more variations [here](./docs/variations.md).
