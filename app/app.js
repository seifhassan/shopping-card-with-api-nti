const express = require("express")
const app = express()
require('../database/connect')

const userRouter = require('../routes/user.routes')
const productRouter = require('../routes/product')
const categoryRouter = require('../routes/categoryRouter')

app.use(express.json())

app.use("/user",userRouter)
app.use("/product",productRouter)
app.use("/category",categoryRouter)


module.exports = app