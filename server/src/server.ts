import express from 'express';

const app = express();

app.get('/users',(request, response) =>{
    const users = [
        {name:'rai',age:20},
        {name:'vini',age:24},
   ];
   
    return response.json(users)
});

app.listen(3333);