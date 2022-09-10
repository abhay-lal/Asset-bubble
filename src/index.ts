import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));

app.get('/', async (req, res) => {
  res.json({ status: 'Online' });
});

const port = Number(process.env.PORT ?? 5000);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
