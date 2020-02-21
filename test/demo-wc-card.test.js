import { html, fixture, expect } from '@open-wc/testing';

import '../demo-wc-card.js';

describe('<demo-wc-card>', () => {
  it('has a default property header', async () => {
    const el = await fixture('<demo-wc-card></demo-wc-card>');
    expect(el.header).to.equal('Your Message');
  });

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <demo-wc-card .header=${'different'}></demo-wc-card>
    `);
    expect(el.header).to.equal('different');
  });
});
