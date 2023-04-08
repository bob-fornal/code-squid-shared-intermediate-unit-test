
const app = require('./app-001');
const math = require('./math');

describe('app testing using Mocks - jest.fn', () => {
  beforeEach(() => {
    math.add = jest.fn();
    math.subtract = jest.fn();
  });

  it('expects to call mock math.add', () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  });

  it('expects to call mock math.subtract', () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
  });
});

describe('app testing using Mocks - jest.mock', () => {
  beforeEach(() => {
    jest.mock('./math');
  });

  it('expects to call mock math.add', () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  });

  it('expects to call mock math.subtract', () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
  });
});
