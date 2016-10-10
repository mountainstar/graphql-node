import Schema from './schema';
import db from '../db/firebase';

import bodyParser from 'body-parser';
import express from 'express';
import { graphql } from 'graphql';

let app = express();
let PORT = 8080;

app.use(bodyParser.text({ type: 'application/graphql' }));

app.post('/users', (req, res) => {
  graphql(Schema, req.body).then((result) => {
    res.send(JSON.stringify(result, null, 2));
  });
});

app.get('/connection', (req, res) => {
  graphql(Schema, req.body, {db}).then((result) => {
    res.send(JSON.stringify(result, null, 2));
  });
});

app.listen(PORT, () => {
  console.log(`We\'re listening on localhost:${PORT} 🏄`);
});
