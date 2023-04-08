
class MethodClass {
  instanceMethod = () => 'output from instance method';
}

describe('Spying 001', () => {
  let service;

  beforeEach(() => {
    service = new MethodClass();
    jest.clearAllMocks();
  });

  it('expects to spy on instance method', () => {
    jest.spyOn(service, 'instanceMethod');

    const result = service.instanceMethod();
    expect(service.instanceMethod).toHaveBeenCalledTimes(1);
    expect(result).toEqual('output from instance method');
  });

  it('expects to spy on instance method and change implementation', () => {
    jest.spyOn(service, 'instanceMethod')
      .mockImplementation(() => 'spy triggered');
    
      const result = service.instanceMethod();
      expect(service.instanceMethod).toHaveBeenCalledTimes(1);
      expect(result).toEqual('spy triggered');
    });
});
