import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import 'ignore-styles';
// import './config/env';

import App from './App';

const app = express();
const port = process.env.PORT || 3000;

app.get('*', async (req, res, next) => {
  res.send(ReactDOMServer.renderToString(<App />));
});

app.listen(port, () => {
  console.info(`Server has listening on port: ${port}`);
});