import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet';
import Html from './../src/components/Html';
import Home from './../src/pages/Home';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';

const app = express();

app.use(express.static('public'))

app.use(favicon('public/images/favicon.png'));
// Parse our POST and PUT bodies.
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

/* At the top, with other redirect methods before other routes */
app.get('*',function(req,res,next){
  if(req.headers['x-forwarded-proto']!='https' && process.env.NODE_ENV === "production")
    res.redirect('https://www.bailrefund.com'+req.url)
  else
    next() /* Continue to other routes if we're not redirecting */
})


app.use('/api', require('./api'));

app.get('/*', (req, res) => {

  const children = ReactDOM.renderToString(<Home />);
  const helmet = Helmet.renderStatic();
  const props = { children, helmet };

  const html = ReactDOM.renderToStaticMarkup(<Html {...props} />);
  res.send(`<!doctype html>${html}`);
});

app.listen(process.env.PORT || 8080);
