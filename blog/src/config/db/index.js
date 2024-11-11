const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/QuanAn')
        console.log('connect successfully!!!')
    } catch (error) {
        console.log('connect failure!!!')
    }
}

module.exports = { connect }

// const mysql2 = require("mysql2")

// const connect_DB = () =>{

//     const connection = mysql2.createConnection({
//         host: "127.0.0.1",
//         port: "3306",
//         user: "root",
//         password: ""
//     });
    
//     connection 
//         .promise()
//         .connect()
//         .then(()=> console.log('CONNECT SUCCESSFULLY!'))
//         .catch(()=> console.log('FAIL!!'))

//     return connection    

// }

// module.exports = connect_DB
