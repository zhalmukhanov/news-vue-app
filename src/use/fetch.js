
// @ts-ignore
import {ref} from 'vue';

const API_KEY = "dxlLxIOEJz1z0rkRZr00omngsMGq6ufYtBF9cRgBlYk";


export function useFetch(url, options) {
    console.log(url)
    const response = ref();
    const request = async () => {
        const res = await fetch(url, {
            headers: {
                'x-api-key': API_KEY
            }});
        response.value = await res.json();
    }
    return {response, request}
};