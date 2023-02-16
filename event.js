const eventEmmitter = require('events')

const eventEmmitter1 = new eventEmmitter()


eventEmmitter1.on('name',()=>{
    console.log('i am working')
})

eventEmmitter1.emit('name')

module.exports =  eventEmmitter1;