<template>
  <Layout>
    <div class="my-10">
      <h1 class="text-3xl md:text-5xl font-bold text-center my-5 text-gray-800">Daily Good Thing</h1>
      <h2 class="text-xl font-light text-center my-5 text-gray-800">A little good thing. Everyday. For your mind.</h2>
    </div>
    


    <GoodThing :goodThing="dailyGoodThing.node"/>

  </Layout>
</template>

<static-query> 
query goodThing {
  goodThings: allContentfulGoodThing {
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

<script>
import GoodThing from '@/components/GoodThing'
export default {
  components: { GoodThing },
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
