const expres = require('express')
const app = expres()
const controller = require('./controller/controller')

app.use(expres.json())
app.use(controller)

app.listen(3000, ()=> {
    console.log('running on port 3000')
})