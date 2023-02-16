const express =require('express')
const event = require('./event')
const bodyParser = require('body-parser')
const comp = require('compression')
const compression = require('compression')



const app = express()
app.use(compression({
    level:6,
    hreshold:100*1000,
    filter:(req,res)=>{
        if(req.header['x-no-compression']){
            return false
        }
        return compression.filter(req,res)
    }
}))

var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(jsonParser)

app.get('/',(req,res)=>{
    res.send('hello'.repeat(50000))
})

//body
app.post('/postreq1/',(req, res)=>{
    console.log(req.body);
    res.send('post requrest')
})

// params
app.get('/create/:name/:password',(req, res)=>{
    console.log(req.params)
    console.log(data);
    res.send('post requrest')
})

//query
app.get('/query/',(req,res)=>{
    console.log('hii')
    console.log(req.query)
    res.end('data')
})

app.listen(3003,()=>{
   console.log('working')
})

