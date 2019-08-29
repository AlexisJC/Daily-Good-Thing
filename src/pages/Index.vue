<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1>Daily Good Thing</h1>
   
    <p v-for="goodThing in $static.goodThings.edges" :key="goodThing.node.title">{{goodThing.node.title}}</p>

    <g-image :src="$static.goodThings.edges[0].node.media.file.url" class="media"/>

  </Layout>
</template>

<static-query> 
query goodThing {
  goodThings: allContentfulGoodThing(filter: { publishDate: { dteq: "2019-08-31T00:00+02:00" }}) {
		edges {
      node {
        title,
        media {file{url (width: 720, height: 200, quality: 90)}},
        publishDate
      }
    }
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.media {
  width: 100%
}
</style>
