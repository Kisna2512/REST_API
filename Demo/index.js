const app = require("express")();

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/api/courses', (req, res) => {
    res.send([1,2,3])
})

app.listen(3000,()=> console.log("Server is running on Port 5000"))