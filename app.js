import express from 'express';
import cors from 'cors';
import mock from './mock.js';
import bodyParser from 'body-parser';
const app = express();
 
app.use(cors());
app.use(bodyParser.json());

app.get('/v1/api', (req, res) => {
  res
    .status(200)
    .send(mock)
    .end();
});
 


// app.use('/cart', itemRoutes);

export default app;