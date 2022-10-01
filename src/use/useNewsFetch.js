import {useFetch} from "@/use/fetch.js";
import {ref} from "vue";

export async function useNewsFetch(category, sources, page) {
    const API_URL = "https://api.newscatcherapi.com/v2/latest_headlines?page_size=9&lang=en" + `&page=${page}`;
    const CATEGORY_URL = category ? API_URL + `&topic=${category}` : API_URL;

    let sourcesList;
    if(sources) {
        sourcesList = String(sources);
        sourcesList = encodeURIComponent(sourcesList);
    }

    const FINALLY_URL = sourcesList ? CATEGORY_URL + "&sources=" + sourcesList : CATEGORY_URL;

    const loaded = ref(false);
    const {response: value, request} = useFetch(FINALLY_URL);

    if (!loaded.value) {
        await request();
        loaded.value = true;
    }

    return {
        value
    }
}