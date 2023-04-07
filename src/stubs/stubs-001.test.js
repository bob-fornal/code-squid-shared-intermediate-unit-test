
const testObject = {
  logSomething() {
    console.log('this does something');
  }
};

describe('Testing Stubs', () => {
  beforeAll(() => {
    jest
      .spyOn(console, 'log')
      .mockImplementation(() => ({}));
  });

  it('expects stub .toBeCalled', () => {
    const stub = jest.fn();

    stub();
    expect(stub).toBeCalled();
    expect(stub).toHaveBeenCalled();
  });

  it('expects stub .toBeCalled', () => {
    const stub = jest.fn();

    // stub();
    expect(stub).not.toBeCalled();
    expect(stub).not.toHaveBeenCalled();
  });

  it('expects spyOn .toBeCalled', () => {
    const somethingSpy = jest.spyOn(testObject, 'logSomething');

    testObject.logSomething();
    expect(somethingSpy).toBeCalled();
    expect(somethingSpy).toHaveBeenCalled();
  });

  it('expects spyOn .mockImplementation .toBeCalled', () => {
    const somethingSpy = jest
      .spyOn(testObject, 'logSomething')
      .mockImplementation();
    
    testObject.logSomething();
    expect(somethingSpy).toHaveBeenCalled();
  });

  it('expects spyOn .mockReturnValue .toBeCalled', () => {
    const somethingSpy = jest
      .spyOn(testObject, 'logSomething')
      .mockReturnValue();

    testObject.logSomething();
    expect(somethingSpy).toHaveBeenCalled();      
  });
});
