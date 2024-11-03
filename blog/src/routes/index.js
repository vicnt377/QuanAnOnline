const loginRouter = require('./login-router')
const staffRouter = require('./staff_router')


function route (app){

    app.use('/', staffRouter)
    app.use('/', loginRouter)
    

      

}

module.exports = route;