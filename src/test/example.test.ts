import { describe, expect } from '@jest/globals';
import example from './example';

describe('result', () => {
  const result = 3;

  it('should correctly sum two digets', () => {
    expect(example(1, 2)).toBe(result);
  });
});
