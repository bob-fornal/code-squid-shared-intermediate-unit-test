
const fns = require('./fns');

const add = (num) => num + fns.getNumber();

describe('Random Spies', () => {
  it('expect "add" to use spy', () => {
    const spyGetNumber = jest.spyOn(fns, 'getNumber')
      .mockImplementation(() => 3);
    
    const result = add(2);
    expect(result).toEqual(5);
    expect(spyGetNumber).toHaveBeenCalled();

    spyGetNumber.mockRestore();
  });
});
