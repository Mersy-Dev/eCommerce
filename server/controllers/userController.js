const userModel = require('../models/userModel')
const asyncHandler = require('express-async-handler');














const signUp = asyncHandler(async (req, res, next) => {
    // console.log(req.body)
    // const { firstName, lastName, email, password } = req.body
    // const userExists = await userModel.findOne({ email })

    // if (userExists) {
    //     res.status(400)
    //     throw new Error('User already exists')
    // }

    // // Hash password
    // // const salt = await bcrypt.genSalt(10)
    // // const hashedPassword = await bcrypt.hash(password, salt)

    // // Create user
    // const user = await userModel.create({
    //     firstName,
    //     lastName,
    //     email,
    //     password,
    // })



    // if (user) {
    //     res.status(201).send({message:" Account has been Created Successfully", status:true})
    // } else {
    //     res.status(400)
    //     throw new Error('Invalid user data')
    // }
     const { email } = req.body

     userModel.findOne({email:email}).then((result) =>{
        if(result){
         res.send({message:" Email in use, try another", alert:false})
        }else{
            const data = userModel(req.body)
            const save = data.save()
             res.status(201).send({message:" Account has been Created Successfully", alert:true})
            
        }
     })




})


const Login = asyncHandler(async (req, res) => {
    const { email, password } = req.body

        userModel.findOne({email : email}).then((result) => {
            if(result){

                const datacoming = {
                    _id:result._id,
                    firstName:result.firstName,
                    lastName:result.lastName,
                    email:result.email,
                    password:result.password,
                    image:result.image,
                };
                console.log(datacoming)
                res.send({message : "Login successful", alert:true, data:datacoming})
            }else{
                res.status(404).send({message : "you have no registered account", alert:false,})
            }

        })

    // // checking for admin email
    // const user = await userModel.findOne({ email })
    // if (user) {
    //     res.status(201).send({message:"Login successful", status:true})
    // } else {
    //     res.status(400)
    //     throw new Error('Invalid credentials')
    // }




})













module.exports = { signUp,  Login}

