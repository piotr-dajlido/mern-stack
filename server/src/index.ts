import express from 'express';

const app = express();
const port = 8080; // default port to listen

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${ port }`);
});
