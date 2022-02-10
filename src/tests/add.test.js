const add = (a, b) => a + b;

const generateGreetings = (name) => `Hi ${name}!`;

test('Should sadd to numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('Should Generate Greeting Message', () => {
    const greeting = generateGreetings('sama');
    expect(greeting).toBe('Hi sama!');
});