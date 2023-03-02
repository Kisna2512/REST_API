const app = require("express")();

app.get('/', (req, res) => {
    res.send("Hello World!!")
})

app.get('/api/courses', (req, res) => {
    res.send([1,2,3])
})

app.get('api/courses/:id', (req, res) => {
    res.send(req.params.id)
})



// PORT
const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`Server is running on Port ${port}`))