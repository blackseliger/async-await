/* eslint-disable no-unused-vars */
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const data = await read();
          const value = await json(data);
          resolve(value);
        } catch (e) {
          throw new Error(e);
        }
      })();
    });
  }
}

GameSavingLoader.load().then((saving) => {
  console.log(saving);
  return saving;
});


// const data = read(); // возвращается Promise!
// const value = json(data); // возвращается Promise!
// return value;

// {"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}
