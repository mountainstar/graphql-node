import schema from './schema';

import bodyParser from 'body-parser';
import express from 'express';
import { graphql } from 'graphql';

let app = express();
let PORT = 8080;

app.use(bodyParser.text({ type: 'application/graphql' }));

app.post('/hello-world', (req, res) => {
  graphql(schema, req.body).then((result) => {
    res.send(JSON.stringify(result, null, 2));
  });
});

app.listen(PORT, () => {
  console.log(`We\'re listening on localhost:${PORT} 🏄`);
});
