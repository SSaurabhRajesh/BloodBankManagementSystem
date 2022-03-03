import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8080/api/v1/bloodgroup";
class BstockService{

    getBloodStock(){
        return axios.get(USER_API_BASE_URL);
    }
}
export default new BstockService()