import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | print_ourse', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:print_course');
    assert.ok(route);
  });
});
