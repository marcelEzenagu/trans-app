import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../helpers/axios";

const initialState = {
       userProfile:"",
        status: 'idle',
        error: null
    }

export const getUserProfile = createAsyncThunk('userProfile/getUser', async(userId) => {
    const res = await instance.get('/users/' +userId)
   
    // console.log("redux slice data", res.data)
    return res.data
})

export const userProfileSlice = createSlice({
    name:'userProfile',
    initialState,
    reducers: {},
    extraReducers: {
        [getUserProfile.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getUserProfile.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.userProfile = action.payload
        },

        [getUserProfile.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error
        }
    }
})

const userProfileReducer  = userProfileSlice.reducer



export default userProfileReducer