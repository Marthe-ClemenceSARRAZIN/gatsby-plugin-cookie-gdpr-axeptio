# gatsby-plugin-gdpr-cookie-axeptio
## Description
Plugin gastby for integrate gdpr solution cookie with axeptio

## Prerequests
* Have account Axeptio, is a solution from new rules GDPR cookie in UE (create here [Axeptio](https://admin.axeptio.eu/))
* Have create a projet with Axeptio
* Add to a projet gastby
* 
### Learning Resources (optional)
[Axeptio](https://admin.axeptio.eu/)

## How to install
Please include installation instructions here.
Gatsby documentation uses `npm` for installation. 

> npm i gatsby-plugin-cookie-gdpr-axeptio

## When do I use this plugin?
When i want include a new gdpr cookie UE with Axeptio

## Configuration

### In gatsby-config.js
```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gastby-plugin-gdpr-cookie-axeptio',
      options: {
        // !soit on rempli le gtagIdentifiant, soit on remplit axpetioIdentifiant ET cookieVersion
        gtagIdentifiant: 'GTM-XXXXXXX', 
        axpetioIdentifiant: 'clientIdAxeptio',
        cookieVersion: 'nameCookieAxeptioVersion'
      }
    },
  ],
}
```
## If use Google Tag manager

**You must have create a tag Axeptio and create triggers associated, you can see how make here: 
[Axeptio GoogleTag Documentation](https://developers.axeptio.eu/cookies/google-tag-manager/controler-vos-balises-axeptio-avec-google-tag-manager)**

In gastby-conf.js you must add GTM tag in gtagIdentifiant

## If use custom integration

See [Axeptio Custom Integrate Documentation](https://developers.axeptio.eu/cookies/cookies-integration)
For integrate this script create in root folder a file gastby-ssr.js












