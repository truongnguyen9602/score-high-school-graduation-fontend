import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BACKEND_URI + "/statistic";

export const findBySbd = (sbd: any) => {
    return axios.get(BASE_URL + "/" + sbd);
};
