var exp = require('express') ;
var ap = exp() ;
ap.use(exp.static(__dirname + '/frontend')) ;
ap.get('/', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/index.html');
}) ;
ap.get('/resume', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/resume.html');
}) ;
ap.get('/snake', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/snake.html');
}) ;
ap.get('/clock', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/clock.html');
}) ;
ap.get('/tambola', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/tambola.html');
}) ;

var port = process.env.PORT || 3000 ;
ap.listen(port, function()
{
    console.log("Site Running on http://localhost:" + 3000) ;
}) ;