const express = require('express')
const app = express()

const PORT = 3000

app.use(express.static('./scr/styles'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`))
