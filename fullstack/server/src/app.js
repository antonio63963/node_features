import express, { application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const PORT = 5000;

const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res) => {
  const userData = {
    name: 'Anton',
    isWeb: true
  }
  console.log('BODY: ', req.body)
  res.json(userData)
});

app.listen(PORT, () => console.log(`Server was launched on port: ${PORT}`));