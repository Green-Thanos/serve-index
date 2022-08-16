var express    = require('express');
var serveIndex = require('../index');
 
var app = express()
 
// Serve URLs like /ftp/thing as public/ftp/thing
// The express.static serves the file contents
// The serveIndex is this module serving the directory
app.use('/ftp', express.static('public/ftp'), serveIndex('public/ftp', {'icons': true}))
 
app.use('/', (req, res) => {
    res.send('Hello World!');
})
// Listen
app.listen(3000)