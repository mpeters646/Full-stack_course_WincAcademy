const getWordLengths = require('./get-word-length.js');

test('Get word lengths', () => {
  const words = ['Sun', 'Potato', 'Roundabout', 'pizza'];
  const expected = [3, 6, 10, 5];

  const output = getWordLengths(words);
  expect(output).toEqual(expected);
});
