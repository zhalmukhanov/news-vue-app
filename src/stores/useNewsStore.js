import { ref, computed } from "vue";
import { defineStore } from "pinia";
import {useSourceFetch} from "@/use/useSourceFetch";
import {useNewsFetch} from "@/use/useNewsFetch";
import {useSearchFetch} from "@/use/useSearchFetch";

export const useNewsStore = defineStore("news",() =>  {
  const news = ref({});
  const selectedTopic = ref("all");
  const search = ref('');
  const allSources = ref([]);
  const selectedSources = ref([]);
  const page = ref(1)

    const fetchNews = async () => {
      let data;
        if (search.value === ''){
            data = await useNewsFetch(selectedTopic.value === "all" ? false : selectedTopic.value, selectedSources.value, page.value);

        }
        else{
            data = await useSearchFetch(search.value,selectedTopic.value === "all" ? false : selectedTopic.value, selectedSources.value, page.value);
        }

        const val = data.value;
        news.value = val.value.articles;
    }

    const fetchSource = async () => {
        const data = await useSourceFetch();
        const val = data.value;
        if (val.value.sources)
        allSources.value = val.value.sources.slice(0, 15);
    }

    const addFetchNews = async () => {
        let data;
        if (search.value === ''){
            data = await useNewsFetch(selectedTopic.value === "all" ? false : selectedTopic.value, selectedSources.value, page.value);

        }
        else{
            data = await useSearchFetch(search.value,selectedTopic.value === "all" ? false : selectedTopic.value, selectedSources.value, page.value);
        }

        const val = data.value;

        let res = [];
        for (let i = 0; i < news.value.length ; i++){
            res.push(news.value[i])
        }
        for (let i = 0; i < val.value.articles.length; i++){
            res.push(val.value.articles[i])
        }
        news.value = res;


    }
  const getSplitNews = () => {
      let res = [[],[],[]];
      let index = 0;
      if (news.value.length > 0)
          for (let item of news.value) {
              if (item){
                  res[index].push(item);
                  index++;
              }

              if (index === 3) index = 0;
          }
      return res;
  }

  const setSelectedTopic = (c) => {
      selectedTopic.value = c;
  }

  const dropSearch = () => {
      search.value = '';
  }

  const setSource = (item) => {
      const exists = selectedSources.value.includes(item)

      if (exists) {
          selectedSources.value = selectedSources.value.filter((c) => { return c !== item });
      } else {
          selectedSources.value.push(item);
      }
  }

  const dropSource = () => {
        selectedSources.value = [];
  }
  return {
      news,
      fetchNews,
      getSplitNews,

      selectedTopic,
      setSelectedTopic,

      search,
      dropSearch,

      allSources,
      selectedSources,
      fetchSource,
      setSource,
      dropSource,

      page,
      addFetchNews
  }



})