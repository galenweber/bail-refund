import React from 'react';
import './styles.css';

export default function Html(props) {
  const { children, helmet } = props;

  return (
    <html id="html" className="no-js" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.script.toComponent()}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <script
          dangerouslySetInnerHTML={{ __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-98252156-1', 'auto');
            ga('send', 'pageview');
          `}}
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

