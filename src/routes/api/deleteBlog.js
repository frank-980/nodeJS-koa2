const router = require("koa-router")();
const {loginMiddleWare_api}=require("../../middleWares/logincheck");
const {deleteBlog_Ctrl}=require("../../controller/deleteBlog")

router.prefix("/api/blog");
router.post("/delete",loginMiddleWare_api,async function(ctx,next){
    const id = ctx.request.body.id
    ctx.body = await deleteBlog_Ctrl(id);
})
module.exports = router;