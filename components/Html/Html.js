/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { PropTypes } from 'react';
import GoogleAnalytics from '../GoogleAnalytics';
import config from '../../config';

function Html({ title, description, body, debug }) {
  return (
    <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{title || config.title}</title>
        <meta name="description" content={description || config.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Takuya Matsuyama" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather:300,400,700|Lato:300,400" />
        <link rel="stylesheet" href="//fonts.googleapis.com/earlyaccess/notosansjapanese.css" />
        <script src={'/app.js?' + new Date().getTime()} />
      </head>
      <body>
        <div id="app" className="container" dangerouslySetInnerHTML={{ __html: body }} />
        <GoogleAnalytics />
      </body>
    </html>
  );
}

Html.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string.isRequired,
  debug: PropTypes.bool.isRequired,
};

export default Html;
