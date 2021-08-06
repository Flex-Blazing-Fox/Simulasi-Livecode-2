const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000
const routers = require('./routers')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routers)

app.listen(PORT, () => {
  console.log('listening on port ' + PORT)
})