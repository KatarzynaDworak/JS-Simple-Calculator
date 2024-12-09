import { calculate } from '../math';

describe('Calculator math functions', () => {
  test('should correctly add two numbers', () => {
    const result = calculate(5, 3, '+');
    expect(result).toBe(8); // Test checks if 5 + 3 is 8
  });

  test('should correctly divide two numbers', () => {
    const result = calculate(10, 2, '/');
    expect(result).toBe(5); // Test checks if 10 / 2 is 5
  });

  test('should return null for division by zero', () => {
    const result = calculate(10, 0, '/');
    expect(result).toBeNull(); // Test checks if division by 0 returns null
  });
});
