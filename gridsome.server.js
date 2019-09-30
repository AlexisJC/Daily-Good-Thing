// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addContentType }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
  })

  /**
   * /goodthing/:date
   */
  api.createPages(async ({ createPage, graphql  }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
    const { data } = await graphql(`query goodThing {
      goodThings: allContentfulGoodThing {
        edges {
          node {
            title,
            slug,
            publishDate,
            media {file{url, contentType}},
            tags
          }
        }
      }
    }
    `)
    data.goodThings.edges.forEach(goodThing => {
      const publishDate = new Date(goodThing.node.publishDate)
      const day = publishDate.getDate()
      const month = publishDate.getMonth() + 1
      const year = publishDate.getFullYear()
      const path = `/${year}/${month}/${day}/${goodThing.node.slug}`
      createPage({
        path: path,
        component: './src/templates/GoodThing.vue',
        context: {
          goodThing: goodThing.node
        }
      })
    })
  })
}
