import {MongoDB} from './mongo.db';

describe('Mongo DB', () => {

  let db: MongoDB;

  beforeEach(() => {
    db = new MongoDB();
  });

  it('can connect to DB', async () => {
    const db = new MongoDB();
    return db.onConnected;
  });

});