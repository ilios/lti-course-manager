import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | printCourse', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:print-course');
    assert.ok(route);
  });
});
