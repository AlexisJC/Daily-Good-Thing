<template>
  <Layout>
    <GoodThing :goodThing="$context.goodThing"/>
  </Layout>
</template>

<script>
import GoodThing from '@/components/GoodThing'
export default {
  components: { GoodThing },
  metaInfo: {
    title: 'Good Thing',
    meta: [
      { name: 'author', content: 'alexisjc' },
      { name: 'description', content: 'A good thing page' }
    ]
  }
}
</script>