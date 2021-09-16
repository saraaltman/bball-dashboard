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

    static getPlayerStats(player) {
        return axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${player}`)
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

    static addPlayerStats(id, fppg, ppg, reb, stl, blk, to, min, games, as, fgp, threep, ftp) {
        return axios.post(`${API_BASE}/player/stats`, { data: {
            player_id: id,
            fantasy_points_per_game: fppg,
            points_per_game: ppg,
            rebounds: reb,
            steals: stl,
            blocks: blk, 
            turnovers: to, 
            avg_minutes_game: min,
            games_played: games,
            assists: as,
            field_goal_percentage: fgp,
            three_point_percentage: threep,
            free_throw_percentage: ftp
        }})
            .then(APIClient.successHandler)
            .catch(APIClient.errorHandler);
    }

    static getDBPlayerStats(id) {
        return axios.get(`${API_BASE}/player/stats/${id}`)
            .then(APIClient.successHandler)
            .catch(APIClient.errorHandler);
    }

    static getTeamStats() {
        return axios.get(`${API_BASE}/team/stats`)
            .then(APIClient.successHandler)
            .catch(APIClient.errorHandler);
    }

    static getPlayer(id) {
        return axios.get(`${API_BASE}/player/${id}`)
            .then(APIClient.successHandler)
            .catch(APIClient.errorHandler);
    }

}