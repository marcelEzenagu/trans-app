import axios  from "axios";

const instance = axios.create({
    baseURL:"https://trans21app.herokuapp.com/"
    
    // "http://192.168.43.83:5010/api/v1"

})


export default instance
