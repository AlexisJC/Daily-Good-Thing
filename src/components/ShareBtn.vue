<template>
  <div class="text-sm text-yellow-800">
    <transition name="fade" mode="out-in">
      <span v-if="copied" key="copied">Copied !</span>
      <span v-else key="copy" class="underline cursor-pointer"
        v-clipboard:copy="link"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >
        Get a link
      </span>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ShareBtn',
  props: {
    goodThing: {type: Object, required: true}
  },
  data: () => ({
    copied: false
  }),
  computed: {
    link () {
      const publishDate = new Date(this.goodThing.publishDate)
      const day = publishDate.getDate()
      const month = publishDate.getMonth() + 1
      const year = publishDate.getFullYear()
      return `https://dailygoodthing.com/${year}/${month}/${day}/${this.goodThing.slug}`
    }
  },
  methods: {
    onCopy: function (e) {
      this.copied = true
      setTimeout(() => {
        this.copied = false
      }, 3000);
    },
    onError: function (e) {
      alert('Failed to copy texts')
    }
  }
}
</script>

<style>

</style>