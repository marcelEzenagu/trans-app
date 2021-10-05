import axios from "axios"
import instance from "../axios"

const signIn = async (user) => {
    try {
        let res = await axios.post('http://localhost:5000/auth/signIn', user) 
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

const signOut = async () => {
    try {
        let res = await instance.get('/auth/signout')
        return await res.json()
    } catch (error) {
        console.log(err)
    }
}

export {signIn, signOut}