const app = require("express")();

const course = [
    {
        id: 1,
        name:"Java"
    },
    {
        id: 2,
        name:"C++"
    },
    {
        id: 3,
        name:"Full Stack"
    },
    {
        id: 4,
        name:"Android"
    },
    {
        id: 5,
        name:"DEVOPS"
    },
]


app.get('/', (req, res) => {
    res.send("Hello World!!")
})

app.get('/api/courses', (req, res) => {
    res.send([1,2,3])
})

app.get('/api/courses/:id', (req, res) => {
    const c = course.find(cid => cid.id === parseInt(req.params.id));
    if(!c) res.status(404).send("Course with given id is not available!!")
    res.send(`Course name is:${c.name} and it's id is: ${c.id}`)
})


app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query)
})





// PORT
const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`Server is running on Port ${port}`))