//console.log("Hello CodeSandbox");

const express = require('express')
//const cors = require('cors');
const server = express();
//server.use(cors())

server.get('/ping', (req, res) => {
    return res.json({'ping':'pong'});
});

server.use(express.json())

server.listen(process.env.PORT || 3000, () => {
    console.log("Server On");
});