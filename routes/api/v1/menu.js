

const router = require('express').Router()

const {ObjectId, getCollection} = require('../../../dbconnect')



router.get('/:id',async (request, response) =>{
    const menu = await getCollection('Menu','Menu')
    const {id} = request.params
    const found = await menu.findOne({"_id": new ObjectId(id) })
    if (found) response.send(found)
    else response.send('nothing has found') 
})

router.get('/', async(request, response) =>{
    const menu = await getCollection('Menu','Menu' )
    const found = await menu.find({}).toArray()
    if (found) response.send(found)
    else response.send('nothing has found')    
})

router.post('/', async(request,response) =>{
    const {name, description, price, img } = request.body

    if(!name || !description || !price || !img){
        response.status(400).send({error: true, message: `Missing information`})
        return
    }   
    const collection = await getCollection('Menu', 'Menu')    
    const found = await collection.findOne({"name": 'name'})

    if (found) return response.send(400).send({error: true, message: `Already exist`})
    const {acknowledged, insertedID} = await collection.insertOne({name, description, price, img})
    response.send({ acknowledged, insertedID})
    response.send("working on this")
})
module.exports = router