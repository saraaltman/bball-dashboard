import axios from 'axios';

const API_BASE = 'http://localhost:9000';

export default class APIClient {

    static errorHandler(error) {
        console.log("APIClient Error", { ...error });
        return Promise.reject(error);
    }

    static successHandler(response) {
        return response.data;
    }

    static playerSearch(name) {
        return axios.get(`https://www.balldontlie.io/api/v1/players/?search=${name}`)
            .then(APIClient.successHandler)
            .catch(APIClient.errorHandler);
    }

    static getTeam() {
        return axios.get(`${API_BASE}/team`)
            .then(APIClient.successHandler)
            .catch(APIClient.errorHandler);
    }



}