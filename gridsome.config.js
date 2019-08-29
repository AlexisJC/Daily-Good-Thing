// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
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
    }
  ]
}
