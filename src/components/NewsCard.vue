<template>
  <div class="bg-white rounded-2xl drop-shadow-md overflow-hidden flex flex-col hover:bg-gray-100 hover:drop-shadow-xl cursor-pointer">
    <div class="w-full overflow-hidden">
      <img class="w-full" :src="mediaUrl" alt="photo">
    </div>
    <div class="p-5 overflow-hidden">
      <div class="flex justify-between items-center">
        <p class="font-light text-cyan-800">{{category}}</p>
      </div>

      <h1 class="text-2xl font-medium">{{ title }}</h1>
      <p class="text-sm text-gray-500">{{excerpt}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: false
      },
      mediaUrl: {
        type: String,
        required: false
      },
      excerpt: {
        type: String,
        required: false
      }
    }
  }
</script>