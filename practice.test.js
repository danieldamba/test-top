import { capitalizer, reverser, calculator, caesarCypher, analyzeArray } from './practice';

test('Capitalizer', () => {
  expect(capitalizer(`danseo`)).toEqual('Danseo');
});

test('Reverser', () => {
  expect(reverser(`danseo`)).toEqual(`oesnad`);
});

test('Add', () => {
  expect(calculator.add(3, 6)).toBe(9);
});

test('substract', () => {
  expect(calculator.substract(99, 7)).toBe(92);
});

test('divide', () => {
  expect(calculator.divide(5, 5)).toEqual(1);
});

test('multiply', () => {
  expect(calculator.multiply(4,4)).toBe(16);
})

test('IIIBOI', () => {
  expect(caesarCypher(`dan`, 3)).toBe(`gdq`)
})

test('CODE KUNST', () => {
  expect(caesarCypher(`satgotLOCOloco`, 3)).toBe(`vdwjrwORFRorfr`);
})


test('POP IS CRYIN', () => {
  expect(caesarCypher('Hello, World!', 3)).toBe(`Khoor, Zruog!`);
});

test('array Analyze', () => {
  expect(analyzeArray([22, 21, 19, 3, 8, 16, 10, 18]))
  .toEqual({
    average: 14,
    min: 3,
    max: 22,
    length: 8,
  });
})