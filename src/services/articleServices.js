import Article from "../models/article.js";

export const createArticleService = async (data) => {
    const article = await Article(data)
    article.save()
    return article
}

export const getAllArticlesService = async () => {
    const articles = await Article.find()
    return articles
}

export const getOneArticleService = async (id) => {
    const article = await Article.findOne({ _id: id })
    return article
}

export const deleteOneArticleService = async (id) => {
    const article = await Article.deleteOne({ _id: id })
    return article
    
}
export const updateOneArticleService = async (id , body) => {
    const article = await Article.updateOne({ _id: id }, body)
    return article

}



