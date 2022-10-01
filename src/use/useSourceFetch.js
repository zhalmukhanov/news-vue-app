import {useFetch} from "@/use/fetch.js";
import {ref, unref} from "vue";

export async function useSourceFetch() {
    const API_URL = "https://api.newscatcherapi.com/v2/sources?&lang=en";

    const loaded = ref(false);
    const {response: value, request} = useFetch(API_URL);

    if (!loaded.value) {
        await request();
        loaded.value = true;
    }

    return {
        value
    }
}