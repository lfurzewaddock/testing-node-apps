// Testing Pure Functions

import {isPasswordAllowed} from '../auth'

const keys = []
const obj = {
  '!aBc123': {
    expected: true,
    msg: 'given a valid pw of "!aBc123" should return true',
  },
  'a2c!': {
    expected: false,
    msg: 'given an invalid (too short) pw of "a2c!" should return false',
  },
  '123456!': {
    expected: false,
    msg:
      'given an invalid (no alphabet characters) pw of "123456!" should return false',
  },
  'ABCdef!': {
    expected: false,
    msg: 'given an invalid (no numbers) pw of "ABCdef!" should return false',
  },
  'abc123!': {
    expected: false,
    msg:
      'given an invalid (no uppercase letters) pw of "abc123!" should return false',
  },
  'ABC123!': {
    expected: false,
    msg:
      'given an invalid (no lowercase letters) pw of "ABC123!" should return false',
  },
  ABCdef123: {
    expected: false,
    msg:
      'given an invalid (no non-alphanumeric characters) pw of "ABCdef123" should return false',
  },
}
for (const key in obj) {
  // eslint-disable-next-line jest/no-if
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    keys.push(key)
  }
}

keys.forEach(testVal => {
  const testDetails = obj[testVal]

  // eslint-disable-next-line jest/valid-title
  test(testDetails.msg, () => {
    const result = isPasswordAllowed(testVal)
    expect(result).toBe(testDetails.expected)
  })
})
