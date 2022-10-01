<template>
  <div class="relative">
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </div>
    <input  v-model="newsStore.search"
            @keydown.enter="searchNews"
            type="search" id="default-search" class="rounded-xl drop-shadow-md border-0 block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded-2xl focus:ring-cyan-600  focus:border-cyan-600" placeholder="Search news" required>
    <button @click="searchNews"
            type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue'
import {useSearchFetch} from "@/use/useSearchFetch";
import {useNewsStore} from "@/stores/useNewsStore";
import {useNewsFetch} from "@/use/useNewsFetch";
import router from "@/router";

export default {
   setup() {
     const newsStore = useNewsStore();

     onMounted(()=>{
       scroll();
     });

     const searchNews = async () => {
       router.push('/');
       await newsStore.fetchNews();
     }

     const scroll = () => {
       window.onscroll = async () => {
         let bottomwindow =
             document.documentElement.scrollTop + window.innerHeight ===
             document.documentElement.offsetHeight;

         if (bottomwindow) {
           newsStore.page++;
           if (newsStore.search === ''){
             await newsStore.fetchNews(useNewsFetch(newsStore.selectedTopic === "all" ? false : newsStore.selectedTopic, newsStore.selectedSources, newsStore.page));
           }
           else{
             await newsStore.fetchNews(useSearchFetch(newsStore.search, newsStore.selectedTopic === "all" ? false : newsStore.selectedTopic, newsStore.selectedSources, newsStore.page));
           }
         }
       };
     }
     return{
       newsStore,
       searchNews,
     }
  },

  methods: {


  }
}
</script>