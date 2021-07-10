import config from '../config/config'
import AxiosService from './axios-service';
// const axios = require('axios').default;

const URL = 'http://localhost:8096/addressbookservice'
export default class AddressBookService {
   
    baseUrl = config.baseUrl;
    addingPerson(data) {
        return AxiosService.postService(`${URL}/create`, data);
    }
    getPerson() {
        return AxiosService.getService(`${URL}/get`);
    }

    deletePerson(id) {
        return AxiosService.deleteService(`${URL}/delete/${id}`);
    }


    editPerson(id) {
        return AxiosService.putService(`${URL}put/${id}`)
    }
    getPersonById(id){
        return AxiosService.putService(`${URL}update/${id}`);
    }
}