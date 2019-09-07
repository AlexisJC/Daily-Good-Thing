// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import * as ackeeTracker from 'ackee-tracker'
ackeeTracker.create({
	server: 'https://ajc-analytics.herokuapp.com',
	domainId: '072bf4db-ffaf-4877-99f8-c88aba3ea8f4'
}).record()

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
