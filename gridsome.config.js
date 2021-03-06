// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Daily Good Thing',
  siteUrl: 'https://www.dailygoodthing.com',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'rzbd4sei21x6', // required
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful',
        options: {
          routes: {
            'GoodThing': '/goodthing/:slug',
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss'
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/collection': {
            changefreq: 'daily',
            priority: 0.9
          }
        }
      }
    }
  ]
}
