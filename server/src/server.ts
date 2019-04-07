import express from 'express';
import {MongoDB} from './mongo.db';

const mongo = new MongoDB();
const app = express();
const port = 8080;

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

mongo.onConnected
.then(() => {
  app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
  });
})
.catch(() => {
  console.error(`error connecting to mongoDB`);
});
