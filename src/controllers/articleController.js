import { createArticleService, 
        getAllArticlesService, 
        getOneArticleService,
        deleteOneArticleService, 
        updateOneArticleService
} from "../services/articleServices.js"

import { uploadFile } from "../helpers/imageUpload.js"



class ArticleController {
    //201 create,500 servor error 
    async createArticle(req, res, next) {
        try {

            req.body.image = await uploadFile(req )
            const data = {
                title: req.body.title,
                content: req.body.content,
                image: req.body.image,
                create_at: new Date()
            }
            console.log(data)
            const article = await createArticleService(data)
            res.status(200).json({ status: 200, message: "Article created successfully", data: article })
        } catch (error) {
            console.log(error)
        }
    }
    async getAllArticles(req, res, next) {

        try {
            const articles = await getAllArticlesService()
            if(articles.length === 0){
                return res.status(404).json({ status:404, message:"No Articles Found" })
            } 
            res.status(200).json({ status: 200, message: "These are all the articles", data: articles })
        } catch(error) {
            console.log(error)
        }
    }
    async getArticle(req, res, next) {
        try {
            const article = await getOneArticleService(req.params.id)
            res.status(200).json({ status: 200, message: "article retieved successfully", data: article })
        } catch (error) {
            console.log(error)
        }
    }
    async updateArticle(req, res, next) {
        try {
            console.log("update")
            const article = await updateOneArticleService(req.params.id,req.body)
            res.status(200).json({ status: 200, message: "article retieved successfully", data: article })
        
        } catch (error) {
            console.log(error)
        }

     }
    async deleteArticle(req, res, next) { 
        try {
            const article = await deleteOneArticleService(req.params.id)
            res.status(200).json({ status: 200, message: "article retieved successfully", data: article })
            
        } catch (error) {
            console.log(error)
        }
    }
}

export default ArticleController;
