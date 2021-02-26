import express from 'express';
import sessionRoutes from './routes/sessions.mjs';

const port = process.env.PORT;
const app = express();

// TODO: @utkarsh Better response for this route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/session', sessionRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
