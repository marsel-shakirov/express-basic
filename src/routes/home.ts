import { Router } from 'express';
import { getAbout, getHome, postHome } from '../controllers/home';

const router = Router();

router.get('/', getHome);

router.get('/about', getAbout);

router.post('/', postHome);

export default router;
