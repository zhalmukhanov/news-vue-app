<template>
  <p
      class="py-1 my-2 pl-3 hover:bg-gray-50 hover:border-l-2 hover:border-gray-500 hover:rounded cursor-pointer"
      :class="{
              'bg-cyan-50 border-l-2 border-cyan-500 rounded': selected
            }"
  >{{capitalizeFirstLetter}}</p>

</template>

<script>
export default{
  props: {
    category:{
      type:String,
      required:true
    },
    selected:{
      type:Boolean,
      required:false
    }
  },
  computed: {
    capitalizeFirstLetter() {
      return this.category.charAt(0).toUpperCase() +this.category.slice(1);
    }
  }
}
</script>

