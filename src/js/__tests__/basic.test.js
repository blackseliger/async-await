
import read from '../reader';
import json from '../parser';

describe('work class GameSavingLoader', () => {
  test('work async promise load()', async () => {
    const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
    const data = await read();
    const value = await json(data);
    const received = value;
    expect(received).toEqual(expected);
  });
});
