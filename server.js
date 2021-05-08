var exp = require('express') ;
const path = require("path") 
const multer = require("multer") ;
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
ap.get('/quiz', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/quiz.html');
}) ;
ap.get('/form', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/form.html');
}) ;

ap.get('/cfcrawler', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/cfhome.html');
}) ;

ap.get('/file', function(req, res)
{
    res.sendFile(__dirname + '/frontend/html/file.html');
}) ;


var storage = multer.diskStorage({ 
	destination: function (req, file, cb) { 

		// Uploads is the Upload_folder_name 
		cb(null, "uploads") 
	}, 
	filename: function (req, file, cb) { 
	cb(null, file.fieldname + "-" + Date.now()+".jpg") 
	} 
}) 
	
// Define the maximum size for uploading 
// picture i.e. 1 MB. it is optional 
const maxSize = 1 * 1000 * 1000; 
	
var upload = multer({ 
	storage: storage, 
	limits: { fileSize: maxSize }, 
	fileFilter: function (req, file, cb){ 
	
		// Set the filetypes, it is optional 
		var filetypes = /jpeg|jpg|png/; 
		var mimetype = filetypes.test(file.mimetype); 

		var extname = filetypes.test(path.extname( 
					file.originalname).toLowerCase()); 
		
		if (mimetype && extname) { 
			return cb(null, true); 
		} 
	
		cb("Error: File upload only supports the "
				+ "following filetypes - " + filetypes); 
	} 

// mypic is the name of file attribute 
}).single("mypic");	 
	
ap.post("/uploadProfilePicture",function (req, res, next) { 
		
	// Error MiddleWare for multer file upload, so if any 
	// error occurs, the image would not be uploaded! 
	upload(req,res,function(err) { 

		if(err) { 

			// ERROR occured (here it can be occured due 
			// to uploading image of size greater than 
			// 1MB or uploading different file type) 
			res.send(err) 
		} 
		else { 

			// SUCCESS, image successfully uploaded 
			res.send("Success, Image uploaded!") 
		} 
	}) 
}) 

var port = process.env.PORT || 3000 ;
ap.listen(port, function()
{
    console.log("Site Running on http://localhost:" + 3000) ;
}) ;