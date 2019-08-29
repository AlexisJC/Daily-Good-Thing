<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1 class="title">Daily Good Thing</h1>
   
    <p>{{dailyGoodThing.node.title}}</p>

    <g-image :src="dailyGoodThing.node.media.file.url" class="media"/>

  </Layout>
</template>

<static-query> 
query goodThing {
  goodThings: allContentfulGoodThing {
		edges {
      node {
        title,
        media {file{url}},
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
  },
  computed: {
    dailyGoodThing () {
      return this.$static.goodThings.edges.find(goodThing => this.isToday(goodThing.node.publishDate)) || this.$static.goodThings.edges[0]
    }
  },
  methods: {
    isToday (date) {
      const formattedDate = new Date(date)
      const today = new Date(Date.now())
      const day = formattedDate.getDate() === today.getDate()
      const month = formattedDate.getMonth() ===  today.getMonth()
      const year = formattedDate.getYear() ===  today.getYear()
      return day && month && year
    }
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
.title {
  color: #00a896
}
</style>
