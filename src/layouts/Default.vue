<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link text-yellow-800" to="/collection">Collection</g-link>
        <g-link class="nav__link text-yellow-800" to="/submit">Submit</g-link>
      </nav>
    </header>
    <transition name="fade" appear>
      <main> <!-- a wrapper for slot is needed -->
        <slot /> <!-- the content -->
      </main>
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    const ackeeTracker = require('ackee-tracker')
    ackeeTracker.create({
      server: 'https://ajc-analytics.herokuapp.com',
      domainId: '072bf4db-ffaf-4877-99f8-c88aba3ea8f4'
    }).record()
  }
}
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}


.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

</style>
