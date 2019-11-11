const express = require('express');
const path  = require('path');

const Server = express();

Server.use(express.static(path.join(__dirname, '../dist')))

Server.listen(3000)


export default  Server