import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import loginRoutes from './controllers/loginController.js';
import signUpRoutes from './controllers/signUpController.js';
const app = express();
 
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', loginRoutes);
app.use('/api/v1', signUpRoutes);

export default app;