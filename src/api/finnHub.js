import axios from 'axios';

// pre-baked token
const token = 'cda8stqad3i97v8jf4agcda8stqad3i97v8jf4b0';

export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token
    }
})