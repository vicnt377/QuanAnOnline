
const staffRouter = require('./staff_router')
const homeRouter = require('./home-router')
const dishRouter = require('./dish_router')
const orderRouter = require('./orderlist_router')

function route (app){

    // app.use('/staff', staffRouter)
    app.use('/',staffRouter,homeRouter,dishRouter,orderRouter)
    

      

}

module.exports = route;