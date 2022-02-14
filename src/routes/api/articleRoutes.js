import express from 'express';
import   ArticleController from './../../controllers/articleController.js'

import multer from 'multer';
import { fileFilter } from '../../helpers/fileFilters.js';
//import path from 'path';

const route = express.Router()
const storage = multer.diskStorage({});

const uploads = multer({ storage, fileFilter });
const articleControllers = new ArticleController()
//route.post('/', articleControllers.createArticle);
route.post('/', uploads.single('image'), articleControllers.createArticle)
route.get('/', articleControllers.getAllArticles);
route.get('/:id', articleControllers.getArticle);
//route.put('/:id', uploads.single('image'), articleControllers.updateArticle)
route.delete('/:id',articleControllers.deleteArticle);
route.patch('/:id',articleControllers.updateArticle);

export default route;