import config from '../config/config'
import AxiosService from './axios-service';
// const axios = require('axios').default;

export default class AddressBookService {
    baseUrl = config.baseUrl;

    addingPerson(data) {
        return AxiosService.postService(`${this.baseUrl}persons`, data);
    }
    getPerson() {
        return AxiosService.getService(`${this.baseUrl}`);
    }
}