const {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
} = require('./verify-password');

// Utillity functions for verifyPassword
test('hasRightLength', () => {
  expect(hasRightLength('123456789')).toBe(false);
});

test('hasRightLength, happy path 1', () => {
  expect(hasRightLength('12345678')).toBe(true);
});

test('hasRightLength, happy path 2', () => {
  expect(hasRightLength('')).toBe(true);
});

test('hasRightLength, null', () => {
  expect(hasRightLength(null)).toBe(false);
});

test('isNotNull', () => {
  expect(isNotNull(null)).toBe(false);
});

test('isNotNull, happy path', () => {
  expect(hasRightLength('a')).toBe(true);
});

test('hasUpperCaseCharacter', () => {
  expect(hasUpperCaseCharacter('a')).toBe(false);
});

test('hasUpperCaseCharacter, happy path 1', () => {
  expect(hasUpperCaseCharacter('A')).toBe(true);
});

test('hasUpperCaseCharacter, happy path 2', () => {
  expect(hasUpperCaseCharacter('Ab')).toBe(true);
});
test('hasUpperCaseCharacter, only digits', () => {
  expect(hasUpperCaseCharacter('12')).toBe(false);
});

test('hasUpperCaseCharacter, null', () => {
  expect(hasUpperCaseCharacter(null)).toBe(false);
});

test('hasLowerCaseCharacter', () => {
  expect(hasLowerCaseCharacter('Z')).toBe(false);
});

test('hasLowerCaseCharacter, happy path 1', () => {
  expect(hasLowerCaseCharacter('z')).toBe(true);
});

test('hasLowerCaseCharacter, happy path 2', () => {
  expect(hasLowerCaseCharacter('Zy')).toBe(true);
});
test('hasLowerCaseCharacter, only digits', () => {
  expect(hasLowerCaseCharacter('12')).toBe(false);
});

test('hasLowerCaseCharacter, null', () => {
  expect(hasLowerCaseCharacter(null)).toBe(false);
});

test('hasDigit', () => {
  expect(hasDigit('a')).toBe(false);
});

test('hasDigit, happy path 1', () => {
  expect(hasDigit('1')).toBe(true);
});

test('hasDigit, happy path 2', () => {
  expect(hasDigit('a1')).toBe(true);
});

test('hasDigit, null', () => {
  expect(hasDigit(null)).toBe(false);
});

// Combine the conditions
test('minimumConditionsReached', () => {
  const conditions = [false, false, false, false, false];
  expect(minimumConditionsReached(conditions)).toBe(false);
});

test('minimumConditionsReached, under minimum', () => {
  const conditions = [true, true, false, false, false];
  expect(minimumConditionsReached(conditions)).toBe(false);
});

test('minimumConditionsReached, on minimum', () => {
  const conditions = [true, true, true, false, false];
  expect(minimumConditionsReached(conditions)).toBe(true);
});

test('minimumConditionsReached, over minimum', () => {
  const conditions = [true, true, true, true, false];
  expect(minimumConditionsReached(conditions)).toBe(true);
});

// Tests for verifyPassword

test('verifyPassword, null', () => {
  expect(verifyPassword(null)).toBe(false);
});

test('verifyPassword, 1', () => {
  expect(verifyPassword('1')).toBe(false);
});

test('verifyPassword, only digits', () => {
  expect(verifyPassword('12345678')).toBe(false);
});

test('verifyPassword, only uppercase', () => {
  expect(verifyPassword('ABC')).toBe(false);
});

test('verifyPassword, only lowercase', () => {
  expect(verifyPassword('abc')).toBe(true);
});

test('verifyPassword, only lowercase but to long', () => {
  expect(verifyPassword('abcdefghi')).toBe(false);
});

test('verifyPassword, correct password', () => {
  expect(verifyPassword('Ab1')).toBe(true);
});
/* https://vimeo.com/455800955/75558a2fca 32:47 */
