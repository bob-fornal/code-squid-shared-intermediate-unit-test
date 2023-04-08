
const app = require('./app-001');
const math = require('./math');

describe('app testing using Mocks = jest.spyOn', () => {
  it('expect call to spy math.add', () => {
    const addMock = jest.spyOn(math, 'add');

    const result = app.doAdd(1, 2);
    expect(result).toEqual(3);
    expect(addMock).toHaveBeenCalledWith(1, 2);
  });

  it('expect call and restore of spy math.add', () => {
    const addMock = jest.spyOn(math, 'add');
    addMock.mockImplementation(() => 'mock');

    const result1 = app.doAdd(1, 2);
    expect(result1).toEqual('mock');

    addMock.mockRestore();
    const result2 = app.doAdd(1, 2);
    expect(result2).toEqual(3);
  });
});
