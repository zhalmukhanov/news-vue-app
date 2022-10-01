import {useFetch} from "@/use/fetch.js";
import {ref, unref} from "vue";

export async function useSearchFetch(q, category, sources, page) {

    const loaded = ref(false);
    const API_URL = `https://api.newscatcherapi.com/v2/search?q=${encodeURIComponent(q)}&page_size=9&page=1&lang=en`;


    let sourcesList;
    if(sources) {
        sourcesList = String(sources);
        sourcesList = encodeURIComponent(sourcesList);
    }

    const FINALLY_URL = sourcesList ? API_URL + "&sources=" + sourcesList : API_URL;
    const {response: value, request} = useFetch(category ? FINALLY_URL + `&topic=${category}` : FINALLY_URL);

    if (!loaded.value) {
        await request();
        loaded.value = true;
    }
    return {
        value
    }
}