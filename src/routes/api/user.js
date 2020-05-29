const router = require("koa-router")();
const {isExist_Ctrl,register_Ctrl,login_Ctrl,logout_Ctrl}=require("../../controller/user");
const userValidate=require('../../validator/user')
const {Validator}=require('../../middleWares/vaildate')
const {loginMiddleWare_api}=require("../../middleWares/logincheck");

router.prefix('/api/user');
router.post("/isExist",async function(ctx,next){
    const {userName}=ctx.request.body;
    ctx.body=await isExist_Ctrl(userName)
})
router.post("/register",Validator(userValidate),async function(ctx,next){
    const {userName,password,gender}=ctx.request.body;
    //controller
    ctx.body=await register_Ctrl({userName,password,gender})
})
router.post("/login",async function(ctx,next){
    const {userName,password}=ctx.request.body;
    ctx.body= await login_Ctrl(ctx,userName,password)
})
router.post("/logout",loginMiddleWare_api,async function(ctx,next){
    ctx.body= await logout_Ctrl(ctx)
})
module.exports=router;