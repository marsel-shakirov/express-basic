import { Request, Response } from 'express';

export const getHome = (req: Request, res: Response) => {
	res.send('<h1>Hello new page</h1>');
};

export const getAbout = (req: Request, res: Response) => {
	res.json({
		message: 'Welcome to the about page',
	});
};

export const postHome = (req: Request, res: Response) => {
	console.log(req.body);

	const newBody = req.body;
	res.status(201).json({ message: 'Данные успешно получены!', data: newBody });
};
