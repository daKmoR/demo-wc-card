# <demo-wc-card\>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i demo-wc-card
```

## Usage

```js
import 'demo-wc-card/demo-wc-card.js';
```

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

## API

You can provide multiple options to adjust the output like so.

### Header

You can give it a different header by providing it as a string

```js story
export const header = () => {
  return html`
    <demo-wc-card .header=${'my new header'}></demo-wc-card>
  `;
};
```

### BackSide

You wanna show the back side first? use the `back-side` as an attribute.

```js story
export const backSide = () => {
  return html`
    <demo-wc-card back-side></demo-wc-card>
  `;
};
```
