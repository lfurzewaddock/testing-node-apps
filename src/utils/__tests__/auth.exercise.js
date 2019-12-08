// Testing Pure Functions

import cases from 'jest-in-case'

import {isPasswordAllowed} from '../auth'

function casify(obj) {
  return Object.entries(obj).map(([name, testVal]) => {
    return {
      name: `${testVal} - ${name}`,
      testVal,
    }
  })
}

cases(
  'isPasswordAllowed: valid passwords',
  opts => {
    const result = isPasswordAllowed(opts.testVal)
    expect(result).toBe(true)
  },
  casify({'given a valid pw of "!aBc123" should return true': '!aBc123'}),
)

cases(
  'isPasswordAllowed: invalid passwords',
  opts => {
    const result = isPasswordAllowed(opts.testVal)
    expect(result).toBe(false)
  },
  casify({
    'given an invalid (too short) pw of "a2c!" should return false': 'a2c!',
    'given an invalid (no alphabet characters) pw of "123456!" should return false':
      '123456!',
    'given an invalid (no numbers) pw of "ABCdef!" should return false':
      'ABCdef!',
    'given an invalid (no uppercase letters) pw of "abc123!" should return false':
      'abc123!',
    'given an invalid (no lowercase letters) pw of "ABC123!" should return false':
      'ABC123!',
    'given an invalid (no non-alphanumeric characters) pw of "ABCdef123" should return false':
      'ABCdef123',
  }),
)
