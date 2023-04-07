
let state = 0;
const counter = {
  add: (value) => state += value,
  getCount: () => state
};

const singleAdd = (obj) => obj.add(10);
const multipleAdd = (obj) => {
  obj.add(15);
  obj.add(20);
};

describe('Parameter Stubs', () => {
  it('expects singleAdd jest.fn() .toHaveBeenCalledWith single call', () => {
    const mockCounter = {
      add: jest.fn()
    };

    singleAdd(mockCounter);
    expect(mockCounter.add).toHaveBeenCalledWith(10);
  });

  it('expects singleAdd jest.spyOn .toHaveBeenCalledWith single call', () => {
    const addSpy = jest.spyOn(counter, 'add');

    singleAdd(counter);
    expect(addSpy).toHaveBeenCalledWith(10);
  });

  it('expects multipleAdd jest.fn() .toHaveBeenCalledWith multiple calls', () => {
    const mockCounter = {
      add: jest.fn()
    };

    multipleAdd(mockCounter);
    expect(mockCounter.add).toHaveBeenCalledWith(15);
    expect(mockCounter.add).toHaveBeenCalledWith(20);
  });

  it('expects multipleAdd jest.spyOn .toHaveBeenCalledWith multiple calls', () => {
    const addSpy = jest.spyOn(counter, 'add');

    multipleAdd(counter);
    expect(addSpy).toHaveBeenCalledWith(15);
    expect(addSpy).toHaveBeenCalledWith(20);
  });
});
