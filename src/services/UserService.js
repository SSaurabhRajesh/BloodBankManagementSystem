import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8080/api/v1/user";
class UserSevice{

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }
    getUserById(id){
        return axios.get(USER_API_BASE_URL+'/'+id);
    }
    createUser(user){
        return axios.post(USER_API_BASE_URL,user);
    }
    
}
export default new UserSevice()