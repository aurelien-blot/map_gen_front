import ApiService from "@/services/api/apiService.js";
import store from "@/store/store.js";

export default class GameApiService {

    static servicePath = '/game';

    static async selectAll() {
        return await ApiService.get(`${this.servicePath}`);
    }

    static async selectById(id) {
        const token = store.state.auth.token;
        return await ApiService.get(`${this.servicePath}/${id}`, token);
    }

}