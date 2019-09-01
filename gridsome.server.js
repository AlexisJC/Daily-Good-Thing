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
      goodThings: allContentfulGoodThing(filter: { publishDate: {lte: "2019-09-01T00:00+02:00"}}) {
        edges {
          node {
            title,
            publishDate,
            media {file{url}},
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
      const path = `/${year}/${month}/${day}`
      console.log(path)
      createPage({
        path: path,
        component: './src/templates/GoodThing.vue',
        context: {
          goodThing: goodThing.node
        }
      })
    })
  })

  /**
   * /collection
   */
  api.createPages(async ({ createPage, graphql  }) => {
    const today = new Date().toISOString()
    const { data } = await graphql(`query GoodThing($page: Int) {
      goodThings: allContentfulGoodThing(perPage: 10, page: $page, filter: { publishDate: {lte: "${today}"}}) @paginate {
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            title,
            media {file{url}, title},
            publishDate,
            tags
          }
        }
      }
    }
    `)

    createPage({
      path: '/collection',
      component: './src/templates/Collection.vue',
      context: {
        goodThings: data.goodThings.edges,
        pageInfo: data.goodThings.pageInfo
      }
    })
  })
}
