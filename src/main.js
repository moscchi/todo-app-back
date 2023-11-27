const server = require('./server/server.js')
require('dotenv').config();

const connect = require('./config/db/db.js');
connect();
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
})