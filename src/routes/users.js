const router = require('koa-router')()
const jwt = require("jsonwebtoken")
const util = require("util");
const verify = util.promisify(jwt.verify);
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.get('/getUserInfo', async (ctx, next)=> {
	const token = ctx.request.header.authorization;
	try{
		const payload= await verify(token.split(" ")[1],"ad122@#@4_ASD")
		ctx.body = payload
	}catch(e){
		ctx.body = e
	}
  })
router.post('/login',async (ctx,next)=>{
	const {user,psw} = ctx.request.body;
	let userInfo=null
	if(user=='admin' && psw=='123'){
		userInfo={
			id:12,
			nickName:"SUN",
			age:25
		}
	}
	let token;
	if(userInfo){
		token=jwt.sign(userInfo,'ad122@#@4_ASD',{expiresIn:'1h'})
	}
	if(userInfo==null){
		ctx.body={
			errorCode:-1,
			msg:'password wrong'
		}
		return false;
	}
		ctx.body={
			errorCode:0,
			msg:token
		}
	
})
module.exports = router
