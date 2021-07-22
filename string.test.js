const stringLength = require('./string.js');

Test('should be a number', () => {
  expect(stringLength('hell')).toBe(4);
});
