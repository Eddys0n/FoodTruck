
const path = require('path')
const express = require('express')

const {ObjectId, getCollection} = require('./dbconnect')

const app = express()
const port = 3010

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

const root = path.join(__dirname, 'public')


app.use('/api/v1/menu', require('./routes/api/v1/menu'))
app.use('/api/v1/events', require('./routes/api/v1/events'))

//webpage routes
app.get('/', (_, response) => {
    response.sendFile('index.html', { root })
})

app.get('/events/:id', (_, response)=>{
    response.sendFile('event.html', { root })
})
// app.get('/menu/:type', (_, response)=>{
//     response.sendFile('menu.html', {root})
// })

app.listen(port, () => console.log(`Listening on port: http://localhost:${port}`))
