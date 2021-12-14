const hasRightLength = require('./verify-password.js');

test('Has the right length', () => {
  const a = 10;
  const b = 25;

  const output = hasRightLength(a, b);
  expect(output).toBe(35);
});

// https://www.youtube.com/watch?v=__QEPUdnJS0 16:52
