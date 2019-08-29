<template>
  <Layout>
    <h1>{{ $context.title }}</h1>
    <g-image :src="$context.media" class="media"/>
  </Layout>
</template>

<style>
.media {
  width: 100%
}
</style>