import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | course/session/publication_check', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:course/session/publication_check');
    assert.ok(route);
  });
});
