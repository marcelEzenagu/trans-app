import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authenticate } from "../../helpers/authHelpers";
import instance from "../../helpers/axios";

const initialState = {
       userInfo:"",
        status: 'idle',
        error: null
    }

export const loginUser = createAsyncThunk('auth/loginUser', async(userDetails) => {
    const res = await instance.post('auth/signin', userDetails)
    
   const newData =  authenticate(res.data)

    return res.data
})

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [loginUser.pending]: (state, action) => {
            state.status = 'loading'
        },
        [loginUser.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.userInfo = action.payload
        },

        [loginUser.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error
        }
    }
})

const authReducer  = authSlice.reducer



export default authReducer