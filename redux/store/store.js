import { configureStore} from '@reduxjs/toolkit'
import authReducer from '../auth/authSlice'
import adminTripReducer from '../trip/adminTripSlice'
import tripReducer from '../trip/tripSlice'
import userProfileReducer from '../userProfile/userProfileSlice'



const store = configureStore({
    reducer:{
        trips:tripReducer,
        auth: authReducer,
        user: userProfileReducer,
        adminTripList:adminTripReducer
    }
})


export default store