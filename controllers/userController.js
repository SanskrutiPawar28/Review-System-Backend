
import User from "../models/user.js"

export const createAdmin=async(req , res)=>{
try{
    const {name,email,password}=req.body;

    const user=new User({
        name,
        email,
        password,
        role:"Admin"
    })

    const savedUser=await user.save();

    res.json({
        savedUser,
        message:"User created successfully"
    });

    }catch(error) {
        console.log(error);
        
        res.json({
           error:"Error occured",
    });
}}

export const createAlumini=async(req,res)=>{
try{
    const {name,email,password}=req.body;

    const user=new User({
        name,
        email,
        password,
        role:"Alumni"
    })

    const savedUser=await user.save();

    res.json({
        savedUser,
        message:"User created successfully"
    });

    }catch(error) {
        console.log(error);
        
        res.json({
           error:"Error occured",
    });
}}


export const createStudent=async(req,res)=>{
try{
    const {name,email,password}=req.body;

    const user=new User({
        name,
        email,
        password,
        role:"Student"
    })

    const savedUser=await user.save();

    res.json({
        savedUser,
        message:"User created successfully"
    });

    }catch(error) {
        res.json({
           error:"Error occured",
    });
}}

export const getAllUsers=async(req,res)=>{
    try {
      const getusers=await User.find()
      res.json({
        getusers
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }

