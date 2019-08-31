<template>
  <div class="rounded overflow-hidden shadow-lg my-10">
    <div class="bg-gray-200">
      <g-image :src="goodThing.media.file.url" :alt="goodThing.media.title" class="mx-auto"/>
    </div>
    
    <div class="px-6 py-4">
      <div>{{publishDate}}</div>
      <div class="font-bold text-xl mb-2 text-gray-700">{{ goodThing.title }}</div>
      <!-- <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p> -->
    </div>
    <div class="px-6 py-4">
      <span 
        v-for="tag in goodThing.tags" :key="tag" 
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" 
        :class="{'mr-2': index + 1 === goodThing.tags.length}"
      >
        {{tag}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodThing',
  props: {
    goodThing: {type: Object, required: true},
    daily: {type: Boolean, required: false}
  },
  computed: {
    publishDate () {
      const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
      return this.daily ? new Date().toLocaleDateString('en-EN', options) : new Date(this.goodThing.publishDate).toLocaleDateString('en-EN', options)
    },
  }
}
</script>

<style>
</style>