<template>
    <div class="rounded-2xl bg-white p-8 drop-shadow-md sticky top-14">
      <p class="text-xl pb-3">Categories</p>
      <category-list-item v-for="c in category"
                          :category="c"
                          :selected="newsStore.selectedTopic === c"
                          @click="selectItem(c)"
      />
    </div>
</template>

<script>
import CategoryListItem from "@/components/CategoryListItem.vue";
import {onMounted, ref} from "vue";
import {useNewsStore} from "@/stores/useNewsStore";
import {useNewsFetch} from "@/use/useNewsFetch";
import {useSearchFetch} from "@/use/useSearchFetch";
import router from "@/router";
export default {
  components: {
    CategoryListItem
  },
   setup() {
    const category = ["all", "news", "sport", "tech", "world", "finance", "politics", "business", "economics", "entertainment", "beauty", "travel", "music", "food", "science", "gaming", "energy"];

    const newsStore = useNewsStore();

     onMounted(()=>{
       scroll();
     });

    const selectItem = async (category) => {
      router.push('/');
      newsStore.setSelectedTopic(category)
      await newsStore.fetchNews();
    }


    return{
      category,
      newsStore,
      selectItem
    }
  }
}
</script>