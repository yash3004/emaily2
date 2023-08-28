const express = require('express');
app = express()
app.get('/' , (req , res) => {
    res.send({hi : "there"});
});
const PORT = process.env.PORT || 5100;
app.listen(PORT);
