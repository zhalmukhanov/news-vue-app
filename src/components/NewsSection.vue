<template>
  <div class="flex flex-wrap justify-between">
    <news-col class="mb-10"
               v-for="news in newsStore.getSplitNews()"
               :news-list="news"
    />
  </div>
</template>

<script>
import NewsCol from "./NewsCol.vue";
import {useNewsStore} from "@/stores/useNewsStore";
import {useNewsFetch} from "@/use/useNewsFetch";
import {onMounted} from "vue";

export default {
  components: {
    NewsCol
  },

  async setup() {
    onMounted(()=>{
      scroll();
    });

    const newsStore = useNewsStore();
    const scroll = () => {
      window.onscroll = async () => {
        let bottomwindow =
            document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.offsetHeight;

        if (bottomwindow) {
          newsStore.page++;
          await newsStore.addFetchNews(useNewsFetch(false, newsStore.selectedSources, newsStore.page));
        }
      };
    }

      return {
        newsStore
      }
  }
}

</script>