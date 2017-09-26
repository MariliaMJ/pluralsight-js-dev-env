const express = require('express');
const path = require('path');
const open = require('open');

const port = 3000;
const app = express();

app.use(require('webpack-dev-imddleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res)=>{
  res.sendFile(Path.join(_dirname, '../src/index.html'))
});

app.listen(port, (err) =>{
  if(err)
    console.log(err);
  else
    open('http://localhost:' + port);
});