const express = require('express');
const app = express()

const NOTES = require('./mockData/notes').NOTES

app.get('/', (request, response) => {
    response.send('<h1>Hello, World!</h1>')
})

app.get('/api/notes', (request,response) => {
    response.json(NOTES)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
