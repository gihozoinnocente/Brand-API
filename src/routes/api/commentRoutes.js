// import  express  from "express";

// import { CommentController } from './../../controllers/commentsController.js'

// const route = express.Router()
// const commentsControllers = new CommentController()
// route.post('/:articleId', commentsControllers.createComment)
// route.get('/:articleId', commentsControllers.getAllArticleComments)

// export default route

import express from "express";
import multer from "multer";
import { CommentController } from "./../../controllers/commentsController.js";
import { fileFilter } from "../../helpers/fileFilter.js";

const route = express.Router();const storage = multer.diskStorage({});
const uploads = multer({ storage, fileFilter });
const commentsControllers = new CommentController();route.post(
  "/:articleId",
  uploads.single(""),
  commentsControllers.createComment
);
route.get("/:articleId", commentsControllers.getAllArticleComments);export default route;