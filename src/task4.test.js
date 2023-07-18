const capitalize = require('./task4.js');

test('capitalize string', () => {
  expect(capitalize('hola')).toBe('HOLA');
});