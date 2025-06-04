import { Request, Response, Router } from 'express';

import homeRouter from './home';
import todosRouter from './todos';

const router = Router();

router.use('/todos', todosRouter);
router.use('/', homeRouter);

router.all('/{*splat}', (req: Request, res: Response) => {
	res.status(400).send('<h1>Not found');
});

export default router;
