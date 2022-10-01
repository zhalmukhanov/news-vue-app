<template>
  <div class="basis-48">
    <router-link v-for="(news) in newsList" :to="{ path: `/news/${news._id}` }">
      <news-card class="mb-10"
                 :title="news.title"
                 :category="news.topic"
                 :media-url="news.media"
                 :excerpt="news.excerpt"
      />
    </router-link>
  </div>
</template>

<script>
import NewsCard from "./NewsCard.vue";
export default {
  props: {
    newsList: {
      type: Array,
      required:true
    }
  },
  components:{
    NewsCard
  }
}
</script>