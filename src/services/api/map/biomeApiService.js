import ApiService from "@/services/api/apiService.js";
import store from "@/store/store.js";

export default class BiomeApiService {

    static servicePath = '/biome';

    static async getAll() {
        return await ApiService.get(`${this.servicePath}`);
    }

}