// const amount = 8
// if(amount<10){
//     console.log('small number')
// }else {
//     console.log('large number')
// }
// console.log(`hey my first node app!!`)

// setInterval(()=>{
//    console.log('hello world')
// }, 2000)


//*********Modules******* \*/


// const name = require('./name')
// const sayHi = require('./utils')
// console.log(name)
// sayHi('susan')
// sayHi(name.john)
// sayHi(name.peter)

//********** OS Module */

// const os = require('os')

//info about the current user
// const user = os.userInfo()
// console.log(user)
//method retruns the uptime
// console.log(`The system uptime is ${os.uptime()}seconds`)
// console.log(os.uptime())

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()

// }
// console.log(currentOS)

// const http = require('http')
// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//     res.end('Welcome to our home page')
//     }
//     if (req.url === '/about'){
//         res.end('Here is our short history')
//     }
//     res.end(
//         `<h1>Ooops!</h1>
//         <a href="/">back home</a>
//         `
//     )
    

// })
// server.listen(5000)


const _ = require('lodash')

const items =[1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)