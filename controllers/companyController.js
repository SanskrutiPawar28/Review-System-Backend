import companyModel from "../models/Company.js";

export const createCompany=async(req , res)=>{
    try{
        const {name,location,industry,email,password}=req.body;
    
        const companyObj=new companyModel({
            name,
            location,
            industry,
            email,
            password,
        })
    
        const savedcompanyObj=await companyObj.save();
    
        res.json({
            savedcompanyObj,
            message:"Company created successfully"
        });
    
        }catch(error) {
            console.log(error);
            
            res.json({
               error:"Error occured",
        });
    }}

    export const getCompanies=async(req,res)=>{
        try {
          const getCompanies=await companyModel.find()
          res.json({
            getCompanies
          })
        } catch (error) {
          res.json({
            error:"Cannot fetch data"
          })
          console.log(error)
        }
      }
    
    