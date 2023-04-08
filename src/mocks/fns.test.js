
const fns = require('./fns');

jest.mock('./fns');
const add = (a) => a + fns.getNumber();
const addWithFn = (a, f) => a + f();

describe('Mocking Random', () => {
  it('expects "addWithFn" to add a number and random', () => {
    const mockGetNumber = jest.fn(() => 3);

    const result = addWithFn(2, mockGetNumber);
    expect(result).toEqual(5);
  });

  it('expects "add" to use Mock', () => {
    add(2);
    expect(fns.getNumber).toHaveBeenCalled();
  });
});
