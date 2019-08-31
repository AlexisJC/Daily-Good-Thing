<template>
  <Layout>
    <GoodThing :goodThing="$context.goodThing" daily/>
  </Layout>
</template>

<script>
import GoodThing from '@/components/GoodThing'
export default {
  components: { GoodThing }
}
</script>