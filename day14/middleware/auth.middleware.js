const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1]
    if (token){
        try{
            const decoded= jwt.verify(token, 'masai',)
            if(decoded){
                next()
            }else{
                res.send({"msg":"Plz login"})
            }
        }catch(err){
            res.send({"err":err.message})
        }
        
   
    }else{
        res.send({"msg":"Plz Login"})
    }
}
module.exports={
    auth
}