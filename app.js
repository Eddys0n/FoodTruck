
const express = require('express')

const {ObjectId, getCollection} = require('./dbconnect')

const app = express()
const port = 3010

app.use(express.json())
app.use(express.static('public'))


app.get('/api/v1/menu/:id',async (request, response)=>{
    const menu = await getCollection('FoodTruck','Menu')
    const {id} = request.params
    const found = await menu.findOne({"_id": new ObjectId(id) })
    if (found) response.send(found)
    else response.send('nothing has found') 
})

app.get('/api/v1/menu', async(request, response)=>{
    const menu = await getCollection('FoodTruck','Menu' )
    const found = await menu.find({}).toArray()
    if (found) response.send(found)
    else response.send('nothing has found')    
})


app.get('/api/v1/events',async(request, response)=>{
        const event = await getCollection('FoodTruck','Events')
        const found = await event.find({}).toArray()
        if (found) response.send(found)
        else response.send('nothing has found')   
    
})

app.get('/api/v1/events/:id',async(request, response)=>{
    const event = await getCollection('FoodTruck','Events')
    const {id} = request.params
    const found = await event.findOne({"_id": new ObjectId(id) })
    if (found) response.send(found)
    else response.send('nothing has found') 
})


app.post('/api/v1/menu',(request,response)=>{
    const {_id, Name, Location, Date, Time } = request.body

    if(!_id || !Name || !Location || !Date || !Time){
        response.status(400).send({error: true, message: `missing information`})
        return
    }

   
    // const collection = await  getCollection('FoodTruck', 'Menu')
    // const number = _id
    // const found = await collection.findOne({"number": number})
    response.send("working on this")
})


app.post('/api/v1/events',(request,response)=>{

})

app.listen(port, () => console.log(`Listening on port: ${port}`))
