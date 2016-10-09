import express from 'express';

let app = express();
let PORT = 8080;

app.post('/hello-world', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`We\'re listening on localhost:${PORT}`);
});
