import axios from "axios";
import mock from '@/modules/mock/api'

export const client = axios.create({
    baseURL: (process.env.NODE_ENV === 'production'
        ? 'https://offblast.herokuapp.com/api/v1'
        : 'http://localhost:8080/api/v1')
});

if (process.env.VUE_APP_USE_MOCK === 'true') {
    mock.run(client);
}

export default {
    getRandomHaikus(params) {
        return client.get('/random', params)
    },

    detectHaikus(text, params) {
        return client.post('/detect', {
            'text': text
        }, params);
    }
}