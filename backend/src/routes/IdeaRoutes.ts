import { Router } from 'express';
import { deleteIdea, postIdea, putIdea, getIdea } from '../controllers/IdeaController';

const router = Router();

router.get('/', getIdea);
router.post('/', postIdea);
router.put('/:id', putIdea);
router.delete('/:id', deleteIdea);

export default router