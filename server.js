const http = require("http")
const fs = require("fs")
const path = require("path")

const PORT = process.env.PORT || 3000;
const server = http.createServer((req,res) => {
    
    let filePath = path.join(
        __dirname,
        req.url === "/" ? "fr.html" : req.url
    )
    
    const ext = path.extname(filePath)
    let contentType = "text/html"
    if(ext === ".jpeg" || ext === "jpg"){
        contentType = "image/jpeg"
    }
    
    fs.readFile(filePath,(err,data) => {
        if(err){
            res.writeHead(404)
            res.end("File not Found")
        }

        else{
            res.writeHead(200,{"Content-Type": contentType})
            res.end(data)
        }
    })
}).server.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});