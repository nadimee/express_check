const express = require('express')
const router = express.Router()
const path = require('path')


const authMiddleware = (req,res,next)=>{
    const date = new Date();

   var day= date.getDay();
   var hour= date.getHours();
    if(([1,2,3,4,5].includes(day))&&(hour>=9&&hour<17)){
        console.log('user authorized')
        next();
    }else{
        res.send('user is not authorized')
    }
}
router.get('/',authMiddleware,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public' , 'views','accueil.html'))
})
router.get('/contact',authMiddleware,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','views','contact.html'))
})
router.get('/services',authMiddleware,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','views','services.html'))
})
module.exports=router