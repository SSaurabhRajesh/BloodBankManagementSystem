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

    login(username,password){
        let obj=axios.get(USER_API_BASE_URL);
        for (obj.id = 1; obj.id < obj.length; obj.id++) {
            if (obj.username===username && obj.password===password) {
                return obj.id; 
            }
        }
        return 0;
    }
    
}
export default new UserSevice()