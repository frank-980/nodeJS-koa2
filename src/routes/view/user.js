/**
 * user 路由
 */
const router = require('koa-router')()
router.get('/register',async (ctx,next)=>{
    await ctx.render('register',{

    })
})
router.get('/login',async (ctx,next)=>{
    await ctx.render('login',{
        
    })
})
module.exports=router