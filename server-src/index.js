import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from './../src/components/Html';
import Home from './../src/pages/Home';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static('public'))

// Parse our POST and PUT bodies.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'));

app.get('/*', (req, res) => {

  const children = ReactDOM.renderToString(<Home />);
  const props = { children };

  const html = ReactDOM.renderToStaticMarkup(<Html {...props} />);
  res.send(`<!doctype html>${html}`);
});

app.listen(process.env.PORT || 8080);
