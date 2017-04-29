var express = require('express');
var app = express();

app
.use("/dist", express.static(__dirname + '/dist'))
.use(express.static('views'))
.get('/', function (req, res) {
   res.sendFile('dist/index.html');
})
.listen(8089);