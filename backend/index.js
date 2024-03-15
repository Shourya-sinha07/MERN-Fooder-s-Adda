// const express=require('express')
// const app=express()
// const port=5000
// const Mongodb=require('./db') //this db file connect backend to database
// Mongodb()
// app.use((req,res,next)=>{ //this is for avoiding cors error
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers","Origin ,X-Requested-With,Content-Type,Accept"
//     );
//     next();
// })
// app.get('/',(req,res)=>{
//     res.send("Hello world")
// })
// app.use(express.json()) //here we saying that the request are sending in json format
// app.use('/api',require('./Routes/CreateUser'))
// app.use('/api',require('./Routes/DisplayData'))
// app.use('/api',require('./Routes/OrderData'))
// app.listen(port,()=>{
//     console.log(`Example app is lishen on port ${port}`)
// })

const express = require('express');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 5000;

const Mongodb = require('./db');
Mongodb();

app.use(express.json());

// Use the cors middleware to handle CORS headers
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from localhost:3000
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

app.get('/', (req, res) => {
    res.send('Hello world');
});

// Your other route handlers go here...
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));

app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
});
