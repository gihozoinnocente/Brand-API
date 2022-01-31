export class UserControllers{
    async register(req, res, next){
        res.status(200).json({message:" REgister the user"})
    } catch (error){
        console.log(error)
    }
    
    async login(req, res, next){
        try{
            res.status(200).json({message:"Login the user"})
        }catch (error){
            console.log(error)
        }
    }
}