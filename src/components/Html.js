import React from 'react';
import './styles.css';

export default function Html(props) {
  const { children } = props;

  return (
    <html id="html" className="no-js" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/styles.css"
        />
        <meta name="theme-color" content="#2196F3" />
      </head>
      <body>
        <div
          id="app"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: children }}
        />
        <script src="/bundle.js" />
      </body>
    </html>
  );
}

