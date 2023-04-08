
const { ApiService } = require('./api-service');

const MOCK_USERS = [
  { username: 'bob', startDate: '2022-01-01T12:00:00.000Z' },
  { username: 'jennifer', startDate: '2022-02-01T12:00:00.000Z' },
  { username: 'patrick', startDate: '2022-03-01T12:00:00.000Z' },
  { username: 'anne', startDate: '2022-04-01T12:00:00.000Z' }
];

describe('API Service', () => {
  let service;

  beforeEach(() => {
    service = new ApiService();
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(MOCK_USERS)
    }));
    fetch.mockClear();
  });

  it('expects "getUsers" to get users', async () => {
    const mockReturnValue = 'DUMMY DATA';
    jest.spyOn(service.tools, 'processDates').mockReturnValue(mockReturnValue);
    const expected = 'DUMMY DATA';

    const result = await service.getUsers();
    expect(result).toEqual(expected);
  });

  it('expects "getUsers" to reject', async () => {
    fetch.mockRejectedValueOnce(new Error('ERROR CODE'));

    const result = await service.getUsers()
    expect(result).toEqual([]);
  });
});
