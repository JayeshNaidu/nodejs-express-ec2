const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    res.send('<h1>Express demo app</h1> <h2>hi jayesh</h2>');
})

app.get('/products' , (req,res) => {
    res.send('<h2> games </h2>');
})
   
app.listen(port , ()=> {
    console.log(`Demo app is listening to port: ${port}`);
})