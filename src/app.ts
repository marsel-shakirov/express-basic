import express from 'express';

import appRouter from './routes';

const app = express();

app.use((req, res, next) => {
	console.log('middleware');
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', appRouter);

app.listen(3000, () => console.log('Hello'));
