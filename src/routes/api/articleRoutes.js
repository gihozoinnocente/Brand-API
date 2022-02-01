import express from 'express';
import   ArticleController from './../../controllers/articleController.js'
import { authenticate } from '../../middlewares/authenticate.js'
//import { articleValidation } from '../../validations/articleValidation/article.validation.js';

import multer from 'multer';
import { fileFilter } from '../../helpers/fileFilters.js';
import { articleValidation } from '../../validations/articleValidation/article.validation.js';
//import path from 'pat

const route = express.Router()
const storage = multer.diskStorage({});

const uploads = multer({ storage, fileFilter });
const articleControllers = new ArticleController()
//route.post('/', articleControllers.createArticle);
route.post('/',authenticate, uploads.single('image'),articleValidation, articleControllers.createArticle)
route.get('/', articleControllers.getAllArticles);
route.get('/:id', articleControllers.getArticle);
//route.put('/:id', uploads.single('image'), articleControllers.updateArticle)
route.delete('/:id',authenticate,articleControllers.deleteArticle);
route.patch('/:id',authenticate, articleControllers.updateArticle);

export default route;