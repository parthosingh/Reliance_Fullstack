const express = require("express")
const {auth} = require("../middlewares/auth.middleware")
const {UserModel} = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const userRouter = express.Router()

userRouter.post("/", async (req, res) => {
  const { name, email, mobileNumber, pass } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already registered with this email" });
    }

    bcrypt.hash(pass, Number(process.env.SALT_ROUNDS), async (err, hash) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      const newUser = new UserModel({ name, email, mobileNumber, pass: hash });
      await newUser.save();
      res.status(200).json({ msg: "You have been successfully registered!" });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

userRouter.post("/login", async(req,res)=> {
    const {mobileNumber, pass} = req.body
    try {
        const matchingUser = await UserModel.findOne({mobileNumber})
        if(matchingUser){
            const isPasswordMatching = await bcrypt.compare(pass, matchingUser.pass)
            if(isPasswordMatching) {
              const token = jwt.sign({userId: matchingUser._id, user: matchingUser.name, MobileNumber: matchingUser.mobileNumber}, 
                process.env.SECRET_KEY)
                res.status(200).json({msg:"Login Successful!", token})
            } else{
                res.status(400).json({msg: "Invalid Password"})
            }
        } else{
            res.status(404).json({msg: "User not found"})
        }
    } catch (error) {
        res.status(500).json({error})
    }
})

userRouter.get("/", auth, async(req,res)=> {
    try {
        const user = await UserModel.find({_id:req.user.userId})
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({msg:"Internal server error", error:error.msg})
    }
  })

  userRouter.delete("/:userId", auth, async (req, res) => {
    const {userId} = req.params
    try {
      const user = await UserModel.findOne({ _id: userId });

      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }

      if (user._id.toString() === req.body.userId) {
        console.log(user._id.toString() === req.body.userId)
        await UserModel.findByIdAndDelete(userId);
        res.status(200).json({ msg: `The user with name: ${user.name} account has been deleted` });
      } else {
        res.status(403).json({ msg: "You are not authorized to perform this task!" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = {userRouter}