import axios  from "axios";

const instance = axios.create({
    baseURL:"http://trans21app.herokuapp.com",
    
})


export default instance
