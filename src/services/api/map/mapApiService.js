import ApiService from "@/services/api/apiService.js";
import store from "@/store/store.js";

export default class MapApiService {

    static servicePath = '/map';

    static async generate(settings) {
        return await ApiService.post(`${this.servicePath}`, settings);
    }

}