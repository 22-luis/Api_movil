const express = require('express');
const app = express();




app.get('/monster', (req, res) => {
    res.status(200).send({
        name: 'Wyvern',
        weaks: 'sylver sword and Ornithosaur Oil'
    })
});


app.listen(3000);
console.log('Server on port', 3000)



