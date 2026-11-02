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

test('titleCase capitalizes each part of a hyphenated word', () => {
  assert.equal(titleCase('hello-world'), 'Hello-World')
  assert.equal(titleCase('HELLO-WORLD'), 'Hello-World')
  assert.equal(titleCase('well-known-thing'), 'Well-Known-Thing')
})

test('titleCase treats a run of hyphens as one separator', () => {
  assert.equal(titleCase('hello--world'), 'Hello--World')
})

test('titleCase handles hyphenated words within a sentence', () => {
  assert.equal(titleCase('a well-known title'), 'A Well-Known Title')
  assert.equal(titleCase('  hello-world   again  '), 'Hello-World   Again')
})

test('sentenceCase capitalizes the first letter', () => {
  assert.equal(sentenceCase('a title'), 'A Title')
})

test('titleCase rejects a non-string', () => {
  assert.throws(() => titleCase(42), TypeError)
})
