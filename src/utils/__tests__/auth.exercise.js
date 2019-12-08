// Testing Pure Functions

import {isPasswordAllowed} from '../auth'

test('given a valid pw of "!aBc123" should return true', () => {
  const result = isPasswordAllowed('!aBc123')
  expect(result).toBe(true)
})

test('given an invalid (too short) pw of "a2c!" should return false', () => {
  const result = isPasswordAllowed('a2c!')
  expect(result).toBe(false)
})

test('given an invalid (no alphabet characters) pw of "123456!" should return false', () => {
  const result = isPasswordAllowed('123456!')
  expect(result).toBe(false)
})

test('given an invalid (no numbers) pw of "ABCdef!" should return false', () => {
  const result = isPasswordAllowed('ABCdef!')
  expect(result).toBe(false)
})

test('given an invalid (no uppercase letters) pw of "abc123!" should return false', () => {
  const result = isPasswordAllowed('abc123!')
  expect(result).toBe(false)
})

test('given an invalid (no lowercase letters) pw of "ABC123!" should return false', () => {
  const result = isPasswordAllowed('ABC123!')
  expect(result).toBe(false)
})

test('given an invalid (no non-alphanumeric characters) pw of "ABCdef123" should return false', () => {
  const result = isPasswordAllowed('ABCdef123')
  expect(result).toBe(false)
})
