'use strict'

const React = require('react')

exports.onRenderBody = function({ setHeadComponents }, pluginsOptions) {
  const activePlugin = (pluginsOptions.gtagIdentifiant !== '' 
  || 
  (pluginsOptions.axpetioIdentifiant !== '' && pluginsOptions.cookieVersion !== '')
  ) ? true : false;
   
  if(activePlugin)
  {
    const scriptIntegrateAxeptio = (pluginsOptions.gtagIdentifiant !== '') ? `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${pluginsOptions.gtagIdentifiant}');
    ` 
    : `
      window.axeptioSettings = {
        clientId: "${pluginsOptions.axpetioIdentifiant}",
        cookiesVersion: "${pluginsOptions.cookieVersion}",
      };
      
      (function(d, s) {
        var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
        e.async = true; e.src = "//static.axept.io/sdk.js";
        t.parentNode.insertBefore(e, t);
      })(document, "script");
    `;
    const scriptElement = React.createElement(`script`, {
      key: 'gtag',
      id: 'gtagAxeptio',
      type: 'text/javascript',
      dangerouslySetInnerHTML: { __html: scriptIntegrateAxeptio }
    });

    setHeadComponents([scriptElement])
  }
  
}
