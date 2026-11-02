import assert from 'node:assert/strict'
import test from 'node:test'

import { sentenceCase, titleCase } from '../src/title-case.js'

test('titleCase capitalizes every word', () => {
  assert.equal(titleCase('hello world'), 'Hello World')
  assert.equal(titleCase('  HELLO   WORLD  '), 'Hello   World')
})

test('titleCase keeps a single word', () => {
  assert.equal(titleCase('github'), 'Github')
})

test('sentenceCase capitalizes the first letter', () => {
  assert.equal(sentenceCase('a title'), 'A Title')
})

test('titleCase rejects a non-string', () => {
  assert.throws(() => titleCase(42), TypeError)
})
