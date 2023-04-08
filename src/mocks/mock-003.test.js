
function forEach(items, callback) {
  for (let data of items) {
    callback(data);
  }
}

describe('Testing Mocks 003', () => {
  it('expect the use of the .mock property', () => {
    const mockCallback = jest.fn(x => 42 + x);

    forEach([0, 1], mockCallback);
    expect(mockCallback.mock.calls.length).toEqual(2);
    expect(mockCallback.mock.calls[0][0]).toEqual(0);
    expect(mockCallback.mock.calls[1][0]).toEqual(1);
    expect(mockCallback.mock.results[0].value).toEqual(42);
    expect(mockCallback.mock.results[1].value).toEqual(43);
  });
});
