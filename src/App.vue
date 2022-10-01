<template>
    <RouterView class="h-full"/>
</template>


<script>
import { RouterView } from 'vue-router'
import {useNewsStore} from "@/stores/useNewsStore";

export default {
  async created(){
    const newsStore = useNewsStore();
    await newsStore.fetchNews();
    await newsStore.fetchSource();

  }
}
</script>
