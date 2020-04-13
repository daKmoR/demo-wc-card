---
name: Bug report
about: Create a report to help us improve
title: ''
labels: ''
assignees: ''
---

## Describe the bug

A clear and concise description of what the bug is.

## Current behavior

This repository is using [mdjs](https://mdjs.dev/) via [mdjs-viewer](https://chrome.google.com/webstore/detail/mdjs-viewer/ifkkmomkjknligelmlcnakclabgohafe) to allow for interactive bug reports right inside github issues.

Use this template to provide a reproduction of your issue.

```js preview-story
import { html } from 'lit-html';
import 'demo-wc-card/demo-wc-card.js';

export const header = () => {
  return html`
    <demo-wc-card .header=${'my new header'}></demo-wc-card>
  `;
};
```

## Expected behavior

A clear and concise description of what you expected to happen.

## Alternative Reproduction

If your issue can't be shown in the above manner please provide steps to reproduce the behavior:

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

If applicable, add screenshots to help explain your problem.
