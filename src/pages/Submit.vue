<template>
  <Layout>
    <h1 class="text-xl md:text-3xl font-bold text-center my-5 text-gray-800">Your good thing can be published !</h1>
    <div class="w-full max-w-xs mx-auto my-10">
      <form method="POST" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" name="goodthing" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" id="custId" name="form-name" value="goodthing">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Your name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" placeholder="Your name">
          <p class="text-xs italic mt-1">I will credit you !</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Your email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Your email">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="file">
            File
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="file" name="file" type="file">
        </div>
        <div class="flex items-center justify-between">
          <button class="hover:bg-teal-100 border border-black-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Submit a good thing'
  }
}
</script>
