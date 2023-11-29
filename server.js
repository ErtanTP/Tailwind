const http    = require("http");
const HTML_Path  = __dirname + "/out";
const FS     = require("fs");

const childProcess = require('node:child_process');
// Attempt to bypass the permission
childProcess.spawn('npm', ['run', 'tw']);
http.createServer(function(req, res)    {
    function returnFile(filePath, )
        {
            let contentType = "text/plain";
            FS.readFile( filePath, function(err, data)
            {
                if(err)
                {
                    res.writeHead(500, {"Content-Type": contentType});
                    return res.end("500");
                }
 
                if(/\.html$/.test(filePath))     contentType = "text/html";
                else if(/\.js$/.test(filePath))  contentType = "text/javascript";
                else if(/\.css$/.test(filePath)) contentType = "text/css";

                
                    res.writeHead(200, { 'Content-Type': contentType + "; charset=utf-8"});
                    res.end(data);
                
            });
        }
    let url = new URL(req.url, "https://" + req.headers.host);
    let reqPath     = HTML_Path + url.pathname;
    FS.stat(reqPath, function(err, stat)
        {
                if(err)
                {
                    res.writeHead(404, {"Content-Type": "text/plain"});
                    return res.end("404");
                }
            returnFile(reqPath);
        });

}).listen(3000, function(){ console.log("HTTP-Server runs on port " + 3000); });