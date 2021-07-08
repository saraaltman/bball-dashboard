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

    static addPlayer(id, fn, ln, p, t, hf, hi, wp) {
        return axios.post(`${API_BASE}/player`, { data: {
            id: id,
            firstName: fn,
            lastName: ln,
            position: p,
            team_id: t,
            height_feet: hf, 
            height_inches: hi, 
            weight_pounds: wp
        }})
            .then(APIClient.successHandler)
            .catch(APIClient.errorHandler);
    }

}