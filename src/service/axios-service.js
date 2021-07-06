const axios = require('axios').default;

class AxiosService {
    postService(url = '', payload=null, tokenRequired=false, httOptions = null){
        
       return axios.post(url, payload, tokenRequired && httOptions);
    }
}
module.exports = new AxiosService();