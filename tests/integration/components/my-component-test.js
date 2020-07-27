import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms))

module('Integration | Component | my-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders, printing at least one error', async function(assert) {
    await render(hbs`<MyComponent/>`);
    // Wait 200ms to be certain our 100ms delay after init() has elapsed
    await timeout(200);

    assert.ok(this.element.textContent.includes('Error:'));
  });
});
