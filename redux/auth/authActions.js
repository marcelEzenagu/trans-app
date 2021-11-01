import axios from 'axios';
import { baseURL, signInUser } from '../../helpers/apicalls';
import { authenticate } from '../../helpers/authHelpers';
import instance from '../../helpers/axios';
import  {authUserFail, authUserPending, authUserSuccess} from './authSlice'

export const authUser = (userDetails) => async(dispatch) => {
    try { 
        dispatch(authUserPending());

        const res = await axios.post(baseURL+'/auth/signin', userDetails )
        
        // await signInUser(userDetails)
        console.log("res in authAction:", res)
        if (res.status != 401 ) {

            authenticate(res.data)
        return  dispatch(authUserSuccess(res.data))
 }
    } catch (e) {
        dispatch(authUserFail(e))
    }
}