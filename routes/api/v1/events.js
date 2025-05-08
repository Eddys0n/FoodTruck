
const router = require('express').Router()

const {ObjectId, getCollection} = require('../../../dbconnect')



router.get('/',async(request, response) =>{
    const event = await getCollection('Events','Info')
    const found = await event.find({}).toArray()
    if (found) response.send(found)
    else response.send('nothing has found')   

})

router.get('/:id',async(request, response) =>{
const event = await getCollection('Events','Info')
const {id} = request.params
const found = await event.findOne({"_id": new ObjectId(id) })
if (found) response.send(found)
else response.send('nothing has found') 
})

router.post('/',async(request,response) =>{
    const {name, location, date, time } = request.body
    console.log(request.body)

    if(!name || !location || !date || !time){
        response.status(400).send({error: true, message: `Missing information`})
        return
    }   
    const collection = await getCollection('Events', 'Info')    
    const found = await collection.findOne({"name": 'name'})

    if (found) return response.send(400).send({error: true, message: `Already exist`})
    const {acknowledged, insertedID} = await collection.insertOne({name, location, date, time})
    response.send({ acknowledged, insertedID})
    response.send("working on this")

})
module.exports = router