<template>
  <Layout>
    <h1 class="text-xl md:text-3xl font-bold text-center my-5 text-gray-800">Historical collection</h1>
    <Pager :info="$page.goodThings.pageInfo" class="text-xl text-center text-gray-800 mb-5" linkClass="mx-2"/>
    <ul>
      <li v-for="(edge, index) in $page.goodThings.edges" :key="'goodThing' + index"> 
        <GoodThing :goodThing="edge.node"/>
      </li>
    </ul>
    <Pager :info="$page.goodThings.pageInfo" class="text-xl text-center text-gray-800 mb-5" linkClass="mx-2"/>
  </Layout>
</template>

<page-query>
query GoodThing($page: Int) {
  goodThings: allContentfulGoodThing(perPage: 10, page: $page, sortBy: "publishDate") @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        title,
        slug,
        media {file{url, contentType}, title},
        publishDate,
        tags
      }
    }
  }
}
</page-query>

<script>
import GoodThing from '@/components/GoodThing'
import { Pager } from 'gridsome'
export default {
  components: { GoodThing, Pager },
  metaInfo: {
    title: 'Collection',
    meta: [
      { name: 'author', content: 'alexisjc' },
      { name: 'description', content: 'A collection of good things' },
    ]
  }
}
</script>

<style>
a[aria-current] {
  @apply underline;
}
</style>