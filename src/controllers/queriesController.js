import { createQueryService, getAllQueryService, getOneQueryService, deleteOneQueryService} from "../services/queryServices.js"


class QueryController {
    //201 create,500 servor error 
    async createQuery(req, res, next) {
        try {
            const data = {

                email: req.body.email,
                name: req.body.name,
                subject: req.body.subject,
                message: req.body.message
            }
            console.log(data)
            const query = await createQueryService(data)
            res.status(200).json({ status: 200, message: "Article created successfully", data: query })
        } catch (error) {
            console.log(error)
        }
    }
    async getAllQuery(req, res, next) {
        
        try {
            const queries = await getAllQueryService()
            res.status(200).json({ status: 200, message: "These are all the articles", data: queries })
        } catch (error) {
            console.log(error)
        }
    }
    async getQuery(req, res, next) {
        try {
            const query = await getOneQueryService(req.params.id)
            res.status(200).json({ status: 200, message: "article retieved successfully", data: query })
        } catch (error) {
            console.log(error)
        }
    }
  
    async deleteQuery(req, res, next) { 
        try {
            const article = await deleteOneQueryService(req.params.id)
            res.status(200).json({ status: 200, message: "article retieved successfully", data: article })
        } catch (error) {
            console.log(error)
        }
    }
}

export default QueryController;
