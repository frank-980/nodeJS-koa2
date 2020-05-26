const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session=require('koa-generic-session')
const redisStore=require('koa-redis')
const {REDIS_CONF}=require('./conf/db')
const  {isProd} = require('./utils/env');
const jwtKoa = require('koa-jwt');
const cors = require('koa2-cors');
const {SESSION_KEY}=require('./conf/keys')

const errorRouter = require('./routes/view/error')
const index = require('./routes/index')
const user = require('./routes/view/user')

//API ROUTER
const API_user = require('./routes/api/user');
const API_createBlog=require('./routes/api/createBlog');
const API_getBlogList = require("./routes/api/getBlogList")
// error handler
let ERROR_CONF={
  redirect:'/error'
}
if(isProd){
  ERROR_CONF={
    redirect:'/error'
  }
}
onerror(app,{ERROR_CONF})
//跨域
app.use(cors())
//jwt加密
/*app.use(jwtKoa({
  secret:'ad122@#@4_ASD'
}).unless({
  //不加密路径
  path:[/^\/users\/login/]
})
)*/
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

/*
配置redis,session
*/
app.keys=[SESSION_KEY]
app.use(session({
  key:'weibo.sid',
  profix:'weibo:sess',
  cookie:{
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  },
  store:redisStore({
    all:`${REDIS_CONF.host}:${REDIS_CONF.port}`
  })
}))
// routes

app.use(index.routes(), index.allowedMethods())
app.use(user.routes(), user.allowedMethods())

//API ROUTER
app.use(API_user.routes(), API_user.allowedMethods())
app.use(API_createBlog.routes(), API_createBlog.allowedMethods())
app.use(API_getBlogList.routes(), API_getBlogList.allowedMethods())
//404
app.use(errorRouter.routes(),errorRouter.allowedMethods)
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
