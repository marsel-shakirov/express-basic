import express, { Request, Response } from 'express';

const app = express();

app.use((req, res, next) => {
	console.log('middleware');
	next();
});

app.get('/', (req: Request, res: Response) => {
	res.send('<h1>Hello new page');
});

app.get('/about', (req: Request, res: Response) => {
	res.send('<h1>Hello about page');
});

app.all('/{*splat}', (req: Request, res: Response) => {
	res.status(400).send('<h1>Not found');
});

app.listen(3000, () => console.log('Hello'));
