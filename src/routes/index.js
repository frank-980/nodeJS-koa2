const router = require('koa-router')()
const {loginMiddleWare_page}=require("../middleWares/logincheck")
router.get('/', loginMiddleWare_page, async (ctx, next) => {
	console.log(ctx.session.userInfo)
  await ctx.render('index', {
    title: 'Hello Koa 2!',
	message:"message",
	blogList:[
	{id:0,title:34},
	{id:1,title:34},
	],
	isFollow:false
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
	/*const session=ctx.session
	if(session.viewNum==null){
		session.viewNum=0
	}
	session.viewNum=session.viewNum+1*/
	//throw Error()
  ctx.body = '123'
	//viewNum:session.viewNum

})
router.get('/profile/:userName',async (ctx,next) =>{
	const {userName}=ctx.params
	ctx.body = {
		title: 'pro',
		userName,
    }
})
router.get('/loadMore/:userName/:pageIndex',async (ctx,next) =>{
	const {pageIndex,userName}=ctx.params;
	ctx.body = {
		userName,
		pageIndex,
		
    }
	console.log(ctx.params)
})

module.exports = router
