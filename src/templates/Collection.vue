<template>
  <Layout>
    <h1 class="text-xl md:text-3xl font-bold text-center my-5 text-gray-800">Historical collection</h1>
    <ul>
      <li v-for="(edge, index) in $context.goodThings" :key="'goodThing' + index"> 
          <GoodThing :goodThing="edge.node"/>
      </li>
    </ul>
    <Pager :info="$context.pageInfo"/>
  </Layout>
</template>

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

</style>