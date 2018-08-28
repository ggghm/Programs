const koa = require('koa')
const app = new koa()
app.use(async(ctx)=>{
  ctx.body ='Hello Koa'
})

app.listen(3000)
