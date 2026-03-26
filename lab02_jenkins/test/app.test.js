'use trict'

const test = require('node:test')
const assert = require('node:assert')
const add = require('../src/index.js');

test('add sum numbers', () => {

    const a = 2
    const b = 3
    const expected = 5

    const result = add(a,b)
    assert.strictEqual(result, expected)

});