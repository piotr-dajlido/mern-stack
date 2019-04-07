import {MongoDB} from './mongo.db';

describe('Mongo DB', () => {

  it('can connect to DB', async () => {
    const db = new MongoDB();
    return db.onConnected;
  });

});
