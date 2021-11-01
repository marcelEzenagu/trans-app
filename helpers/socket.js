import {io} from "socket.io-client"
import { baseURL } from "./apicalls";

const URI = "https://trans21app.herokuapp.com";
const socket = io(URI, {autoConnect: false})



socket.onAny((event, ...args) => {
    console.log(event, args)
});

export default socket;