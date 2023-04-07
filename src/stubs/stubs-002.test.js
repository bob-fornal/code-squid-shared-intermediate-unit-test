
let count = 0;
const counter = {
  increment: () => count += 1,
  getCount: () => count
};
const app = (obj) => obj.increment();

describe('Counter Stubs', () => {
  it('expects app with mock counter .toHaveBeenCalledTimes', () => {
    const mockCounter = {
      increment: jest.fn()
    };

    app(mockCounter);
    expect(mockCounter.increment).toHaveBeenCalledTimes(1);
    expect(counter.getCount()).toEqual(0);
  });

  it('expects app with .spyOn(counter) .toHaveBeenCalledTimes', () => {
    const incrementSpy = jest.spyOn(counter, 'increment');

    app(counter);
    expect(incrementSpy).toHaveBeenCalledTimes(1);
    expect(counter.getCount()).toEqual(1);
  });
});
