import express from 'express';
import routes from './routes';

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes)

app.get('/', (req, res) => res.send('Welcome to e-ponto'));

app.listen(port, () => {
    console.log(`Application is running on port ${port}.`);
});