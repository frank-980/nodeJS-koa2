const router = require("koa-router")();
const {loginMiddleWare_api}=require("../../middleWares/logincheck");
const {createBlog_Ctrl}=require("../../controller/createBlog")

router.prefix("/api/blog");
router.post("/createBlog",loginMiddleWare_api,async function(ctx,next){
    const userId = ctx.session.userInfo.id
    const content = ctx.request.body.content;
    ctx.body = await createBlog_Ctrl(userId,content);
})
module.exports = router;