<template>
  <Layout>
    <ul>
      <li v-for="(edge, index) in $static.goodThings.edges" :key="'goodThing' + index"> 
        <GoodThing :goodThing="edge.node"/>
      </li>
    </ul>
    
  </Layout>
</template>

<script>
import GoodThing from '@/components/GoodThing'
export default {
  components: { GoodThing }
}
</script>

<static-query>
query GoodThing($page: Int) {
  goodThings: allContentfulGoodThing(perPage: 10, page: $page) @paginate {
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
</static-query>

<style>

</style>