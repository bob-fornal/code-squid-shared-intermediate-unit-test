
const doAdd = (a, b, callback) => {
  callback(a + b);
}

describe('Testing Mocks 002', () => {
  it('expects callback with arguments added together', () => {
    const mockCallback = jest.fn();

    doAdd(1, 2, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(3);
  });
});
