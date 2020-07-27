import Component from '@ember/component';
import EmberObject from '@ember/object';

export default Component.extend({
  nums: undefined,
  errors: undefined,

  init() {
    this._super(...arguments);
    this.set('nums', [1,2,3,4,5]);
    this.set('errors', EmberObject.create());
    setTimeout(this.validateNums.bind(this), 100);
  },

  validateNums() {
    this.set('nums', this.nums.map((link, index) => {
      if (link % 2 === 0) {
        this.errors.set(index, 'Error: bad number, divisible by 2.');
      } else {
        this.errors.set(index, null);
      }
      return link;
    }));
  }
})
