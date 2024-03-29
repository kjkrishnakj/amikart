import connectDb from "../../middleware/mongoose";
import User from "../../models/User";
import jsonwebtoken from "jsonwebtoken"


const handler = async (req,res)=>{
 
    if(req.method =='POST'){
        let token = req.body.token
        
        
        
        // let user = jsonwebtoken.verify(token,process.env.JWT_SECRET,{expiresIn:"2d"})
        // let dbuser = User.find({email:req.body.email})
        let dbuser = await User.findOneAndUpdate({ "email": req.body.email },{address:req.body.address,pincode:req.body.pincode,name:req.body.name,phone:req.body.phone})

        // console.log("user : "+dbuser);
        // const {name,email,address,pincode,phone} = dbuser
        // console.log(name,email,address,pincode);
        console.log(dbuser);
        // res.status(200).json({dbuser})
        res.status(200).json({success:true})
    }
    else{

        res.status(400).json({ error:'error' });
    }
}
export default connectDb(handler)
