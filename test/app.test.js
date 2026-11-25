const { describe, it } = require('node:test');
const assert = require('node:assert');
const { add } = require('../app');

describe('add() unit tests', () => {
  it('adds two positive numbers', () => {
    assert.strictEqual(add(2, 3), 5);
  });

  it('adds positive and negative numbers', () => {
    assert.strictEqual(add(10, -4), 6);
  });

  it('adds zero properly', () => {
    assert.strictEqual(add(0, 5), 5);
  });
});