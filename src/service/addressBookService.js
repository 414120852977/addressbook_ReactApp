import config from '../config/config'
import axiosService from '../service/axios-service';
const axios = require('axios').default;

export default class AddressBookService {
    baseUrl = config.baseUrl;

    addingPerson(data) {
        return axios.post(`${this.baseUrl}persons`,data);
    }
}
