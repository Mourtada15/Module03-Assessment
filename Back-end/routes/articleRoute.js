import express from 'express';
const router = express.Router();

import * as articleController from '../controllers/articleController.js'

router.get('/', articleController.getArticles);
router.get('/:id', articleController.getArticle);
router.post('/', articleController.createArticle);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

export default router;