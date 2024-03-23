console.log('my first server fucker')
const http = require('http')
const server = http.createServer((req,res)=>{
    let url =  req.url
    if(url==='/'){
        res.write('<p>fucker</p>')
        console.log('fucker')
    }
})
server.listen(7000,()=>{
    console.log('server is running...')
})