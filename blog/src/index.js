const path = require('path');
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const session = require('express-session');
const app = express()

const moment = require('moment');
const port = 3000
// const db = require ('./config/database.config')


const route = require('./routes')

const db = require('./config/db')
//connect to DB
db.connect()

// global.database = db()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', engine({
  extname: '.hbs',
  helpers: {
    sum: (a,b) => a+b,
    statusClass: function(status) {
      return status === 'Đã giao' ? 'success' : 'warning';
    }
  }
}));



app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

//Route init
route(app)

require('dotenv').config();



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})