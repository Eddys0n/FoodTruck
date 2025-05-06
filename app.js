
const express = require('express')

const {ObjectId, getCollection} = require('./dbconnect')

const app = express()
const port = 3010

app.use(express.json())
app.use(express.static('public'))


app.get('/api/v1/menu/:id',async (request, response)=>{
    const menu = await getCollection('Menu','Menu')
    const {id} = request.params
    const found = await menu.findOne({"_id": new ObjectId(id) })
    if (found) response.send(found)
    else response.send('nothing has found') 
})

app.get('/api/v1/menu', async(request, response)=>{
    const menu = await getCollection('Menu','Menu' )
    const found = await menu.find({}).toArray()
    if (found) response.send(found)
    else response.send('nothing has found')    
})


app.get('/api/v1/events',async(request, response)=>{
        const event = await getCollection('Events','Info')
        const found = await event.find({}).toArray()
        if (found) response.send(found)
        else response.send('nothing has found')   
    
})

app.get('/api/v1/events/:id',async(request, response)=>{
    const event = await getCollection('Events','Info')
    const {id} = request.params
    const found = await event.findOne({"_id": new ObjectId(id) })
    if (found) response.send(found)
    else response.send('nothing has found') 
})


app.post('/api/v1/menu', async(request,response)=>{
    const {name, description, price, img } = request.body

    if(!name || !description || !price || !img){
        response.status(400).send({error: true, message: `missing information`})
        return
    }   
    const collection = await getCollection('Menu', 'Menu')    
    const found = await collection.findOne({"name": 'name'})

    if (found) return response.send(400).send({error: true, message: `already exist`})
    const {acknowledged, insertedID} = await collection.insertOne({name, description, price, img})
    response.send({ acknowledged, insertedID})
    response.send("working on this")
})


app.post('/api/v1/events',async(request,response)=>{
    const {Name, Location, Date, Time } = request.body

    if(!Name || !Location || !Date || !Time){
        response.status(400).send({error: true, message: `missing information`})
        return
    }   
    const collection = await getCollection('Events', 'Info')    
    const found = await collection.findOne({"name": 'name'})

    if (found) return response.send(400).send({error: true, message: `already exist`})
    const {acknowledged, insertedID} = await collection.insertOne({Name, Location, Date, Time})
    response.send({ acknowledged, insertedID})
    response.send("working on this")

})

app.listen(port, () => console.log(`Listening on port: ${port}`))
