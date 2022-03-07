import axios from "axios";

export default axios.create({
    baseURL: 'http://178.159.39.106/api/v1/'
})