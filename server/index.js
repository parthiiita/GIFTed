const express = require('express')
const app = express()
const port = 3000
const httpProxy = require('http-proxy');
const proxyServer = httpProxy.createProxyServer({
    target: `https://api.giphy.com`,
    changeOrigin: true,
  });
  //app.use(express.static(__dirname + 'dist'));  const router = express.Router();
  function logProxyError(error) {
    logger.error('Error occured in giphy', { error });
  }
  app.get('/api', (req, res) => res.send('hello world'));
  app.get('/api/*', (req, res) => {
     // console.log(req);
    req.url = req.url.replace('/api', '');
    console.log(req.url);
    
    proxyServer.web(req, res, logProxyError.bind(null));
  });

  app.use(express.static("./"))
  app.use("*", (req, res) => {
  console.log(__dirname);
  res.sendFile('index.html', { root: './public' });
});
  
// app.get('/hello', (req, res) => {
//     console.log('hit');
//     var newurl = 'http://google.com/';
//     request(newurl).pipe(res);
//     //return res.send('Hello World!')
// });
// app.get('/', function(req,res) {
//   //modify the url in any way you want
//   var newurl = 'http://google.com/';
//   request(newurl).pipe(res);
// });
app.listen(port, () => console.log(`Node backend running on port ${port}!`))