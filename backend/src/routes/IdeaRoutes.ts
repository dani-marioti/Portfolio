import { Router } from 'express';
import { createIdea, deleteIdea, findAll, findOne, updateIdea } from '../controllers/IdeaController';
const router = Router();

router.get('/', findAll);
router.get('/:id', findOne);
router.post('/', createIdea);
router.put('/:id', updateIdea);
router.delete('/:id', deleteIdea);

export default router