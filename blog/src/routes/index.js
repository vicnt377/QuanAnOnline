const loginRouter = require('./login-router')
const staffRouter = require('./staff_router')
const homeRouter = require('./home-router')
const dishRouter = require('./dish_router')

function route (app){

    // app.use('/staff', staffRouter)
    app.use('/', loginRouter,staffRouter,homeRouter,dishRouter)
    

      

}

module.exports = route;