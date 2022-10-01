<template>
  <p class="bg-cyan-500 rounded-2xl px-2 py-1 text-sm text-white cursor-pointer hover:bg-cyan-600"
     :class="{
              'bg-cyan-700': selected
            }"
  >{{tagName}}</p>
</template>

<script>
  export default {
    props: {
      tagName:{
        type: String,
        required: true
      },
      selected: {
        type: Boolean,
        required: false
      }
    }
  }
</script>