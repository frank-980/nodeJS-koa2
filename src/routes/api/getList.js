const router = require("koa-router")();
const getList_Ctrl = require("../../controller/getList");

router.prefix("/api/blog");
/**
 * 参数：
 * order：数据排序方法的依据。选填，字符串类型，默认按照id排列
 * limit：要加载数据的条数。选填，数字类型，默认加载全部
 */
router.post("/getList",async function(ctx,next){
    const pageIndex = ctx.request.body.pageIndex;
    ctx.body = await getList_Ctrl(pageIndex);
})
module.exports=router;