
describe('Testing Mocks 001', () => {
  it('expects to test a minimal mock', () => {
    const mock = jest.fn();

    let result = mock('bob');
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('bob');
  });

  it('expects to test a mock implementation', () => {
    const mock = jest.fn(() => 'bob');

    const result = mock('called with');
    expect(result).toEqual('bob');
    expect(mock).toHaveBeenCalledWith('called with');
  });

  it('expects to test another mock implementation', () => {
    const mock = jest.fn().mockImplementation(() => 'bob');

    const result = mock('called with');
    expect(result).toEqual('bob');
    expect(mock).toHaveBeenCalledWith('called with');
  });

  it('expects to test a single call mock implementation', () => {
    const mock = jest.fn().mockImplementationOnce(() => 'bob');

    const result1 = mock('first call');
    expect(result1).toEqual('bob');
    expect(mock).toHaveBeenCalledWith('first call');

    const result2 = mock('second call');
    expect(result2).toEqual(undefined);
    expect(mock).toHaveBeenCalledWith('second call');
  });

  it('expects to test a mock with return value', () => {
    const mock = jest.fn();
    mock.mockReturnValue('bob');

    const result = mock('called with');
    expect(result).toEqual('bob')
    expect(mock).toHaveBeenCalledWith('called with');
  });

  it('expect to test a mock with promise resolution', () => {
    const mock = jest.fn();
    mock.mockResolvedValue('bob');

    const result = mock('called with');
    expect(result).resolves.toEqual('bob');
    expect(mock).toHaveBeenCalledWith('called with');
  });

  it('expects to test a mock with async/await promise resolution', async () => {
    const mock = jest.fn();
    mock.mockResolvedValue('bob');

    const result = await mock('called with');
    expect(result).toEqual('bob');
    expect(mock).toHaveBeenCalledWith('called with');
  });
});
