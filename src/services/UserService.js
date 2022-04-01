import axios from 'axios';

const USER_API_BASE_URL="http://localhost:8080/api/v1/user";
class UserSevice{

    getUserById(id){
        return axios.get(USER_API_BASE_URL+'/'+id);
    }
    getUsers(){
        let obj=axios.get(USER_API_BASE_URL);
        return obj;
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL,user);
    }
    
    deluser(id){
        return axios.delete(USER_API_BASE_URL+'/'+id);
    }

    getLogin(username,password){
        return axios.get(USER_API_BASE_URL+'/'+username+'/'+password);
    }
    
}
export default new UserSevice()