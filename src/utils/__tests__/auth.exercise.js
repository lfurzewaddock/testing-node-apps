// Testing Pure Functions

import cases from 'jest-in-case'

import {isPasswordAllowed} from '../auth'

cases(
  'isPasswordAllowed',
  opts => {
    const result = isPasswordAllowed(opts.testVal)
    expect(result).toBe(opts.result)
  },
  {
    'given a valid pw of "!aBc123" should return true': {
      testVal: '!aBc123',
      result: true,
    },
    'given an invalid (too short) pw of "a2c!" should return false': {
      testVal: 'a2c!',
      result: false,
    },
    'given an invalid (no alphabet characters) pw of "123456!" should return false': {
      testVal: '123456!',
      result: false,
    },
    'given an invalid (no numbers) pw of "ABCdef!" should return false': {
      testVal: 'ABCdef!',
      result: false,
    },
    'given an invalid (no uppercase letters) pw of "abc123!" should return false': {
      testVal: 'abc123!',
      result: false,
    },
    'given an invalid (no lowercase letters) pw of "ABC123!" should return false': {
      testVal: 'ABC123!',
      result: false,
    },
    'given an invalid (no non-alphanumeric characters) pw of "ABCdef123" should return false': {
      testVal: 'ABCdef123',
      result: false,
    },
  },
)
