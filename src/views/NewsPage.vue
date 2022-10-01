<template>
  <div class="flex p-14 gap-10">
    <div class="w-2/12">
      <div class="sticky top-14 z-50">
        <Suspense>
          <search-section/>
        </Suspense>
        <Suspense>
          <source-section/>
        </Suspense>
      </div>
    </div>

    <div class="mx-auto w-8/12 mt-2">
      <router-link :to="{path: `/`}" >
        <p class="inline py-2 px-3 rounded-xl text-white bg-cyan-500 cursor-pointer">Back</p>
      </router-link>
      <div class="flex items-start mt-8">
        <img :src="news.media" class="rounded-2xl drop-shadow-md w-5/12">
        <div class="w-6/12 px-8">
          <div class="flex justify-between items-end">
            <p class="rounded-2xl bg-cyan-500 px-2 text-gray-800">{{news.topic}}</p>
            <p class="text-sm text-gray-400">{{news.published_date}}</p>
          </div>
          <h1 class="text-3xl font-bold mt-3">{{news.title}}</h1>
          <p class="text-gray-600 mt-5">{{news.summary}}</p>
          <div class="flex items-end flex-col">
            <p>{{news.authors}}</p>
            <a :href="news.link" target="_blank" class="text-blue-600 underline">See all</a>
          </div>
        </div>
      </div>
    </div>

    <div class="w-2/12">
      <Suspense>
        <category-section/>
      </Suspense>
    </div>
  </div>

</template>


<script>
import {useRoute} from "vue-router";
import {computed} from "vue";
import {useNewsStore} from "@/stores/useNewsStore";
import SearchSection from "@/components/SearchSection.vue";
import SourceSection from "@/components/SourceSection.vue";
import CategorySection from "@/components/CategorySection.vue";
export default {
  components: {
    SourceSection,
    SearchSection,
    CategorySection
  },
  setup() {
    const newsStore = useNewsStore();

    const route = useRoute();

    const news = computed(() => {
      // return newsStore.news[route.params.id]
      return newsStore.news.filter(a => a._id === route.params.id)[0]
    });

    return { news }
  }
}
</script>