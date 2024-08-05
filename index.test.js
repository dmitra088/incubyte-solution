const add = require('./index');

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('should return the number itself for a single number', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
});

test('should return the sum of two numbers separated by a comma', () => {
    expect(add("1,5")).toBe(6);
    expect(add("10,20")).toBe(30);
});

test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("4\n5\n6")).toBe(15);
});

test('should handle custom delimiters specified at the start of the string', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n3|4|5")).toBe(12);
});

test('should throw an error if negative numbers are included', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
    expect(() => add("//;\n-1;2;-3")).toThrow("negative numbers not allowed -1,-3");
});