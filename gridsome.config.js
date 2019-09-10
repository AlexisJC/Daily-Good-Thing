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
        accessToken: '2reV4PxNqoNrUHj0vKRTe3aLhnirG6fqGSi1wfhu9Uc', // required
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
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
          title: 'Gridsome',
          startUrl: '/',
          display: 'standalone',
          statusBarStyle: 'default',
          manifestPath: 'manifest.json',
          serviceWorkerPath: 'service-worker.js',
          shortName: 'Gridsome',
          themeColor: '#666600',
          backgroundColor: '#ffffff',
          icon: './static/icon.png' // must be supplied!
      }
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
