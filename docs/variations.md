# Variations

```js script
import { html } from 'lit-html';
import '../demo-wc-card.js';
```

## With short text

```js preview-story
export const shortText = () => {
  return html`
    <demo-wc-card>
      This is a card
    </demo-wc-card>
  `;
};
```

## With long text

```js preview-story
export const longText = () => {
  return html`
    <demo-wc-card>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
      was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum
    </demo-wc-card>
  `;
};
```

```js script
export default {
  title: 'Demo Card/Variations',
};
```
