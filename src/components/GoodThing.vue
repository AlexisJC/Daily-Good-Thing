<template>
  <div class="rounded overflow-hidden shadow-lg my-10">
    <div class="bg-gray-200">
      <g-image v-if="isImage(goodThing.media.file)" :src="goodThing.media.file.url" :alt="goodThing.media.title" class="mx-auto"/>
      <video v-else-if="isVideo(goodThing.media.file)" :src="goodThing.media.file.url" controls class="mx-auto">{{goodThing.media.title}}</video>
    </div>
    
    <div class="px-6 py-4">
      <ShareBtn class="float-right" :goodThing="goodThing"/>
      <div class="font-light">{{publishDate}}</div>
      <div class="font-bold text-xl mb-2 text-gray-700">{{ goodThing.title }}</div>
      <!-- <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p> -->
    </div>
    <div class="px-6 py-4">
      <span 
        v-for="(tag, index) in goodThing.tags" :key="tag" 
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" 
        :class="{'mr-2': index + 1 === goodThing.tags.length}"
      >
        #{{tag}}
      </span>
    </div>
  </div>
</template>

<script>
import ShareBtn from '@/components/ShareBtn'
export default {
  name: 'GoodThing',
  components: { ShareBtn },
  props: {
    goodThing: {type: Object, required: true},
    daily: {type: Boolean, required: false}
  },
  computed: {
    publishDate () {
      const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
      return this.daily ? new Date().toLocaleDateString('en-EN', options) : new Date(this.goodThing.publishDate).toLocaleDateString('en-EN', options)
    },
    canShare () {
      window.share
    }
  },
  methods: {
    isImage(file) {
      return file.contentType.startsWith('image')
    },
    isVideo(file) {
      return file.contentType.startsWith('video')
    }
  }
}
</script>

<style>
</style>