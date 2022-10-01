<template>
  <div class="mx-auto w-full flex min-h-fit p-14 gap-10">
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
    <div class="w-8/12 flex flex-col">
        <h3 class="text-xl font-medium">News</h3>
      <Suspense>
        <news-section class="mt-5"/>
      </Suspense>
    </div>
    <div class="w-2/12">
      <Suspense>
        <category-section/>
      </Suspense>
    </div>
  </div>
</template>

<script>
import NewsSection from "../components/NewsSection.vue";
import SearchSection from "../components/SearchSection.vue";
import SourceSection from "../components/SourceSection.vue";
import CategorySection from "../components/CategorySection.vue";
export default {

  components: {
    SourceSection,
    NewsSection,
    CategorySection,
    SearchSection
  }
}
</script>