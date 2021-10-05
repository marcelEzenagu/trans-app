import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../helpers/axios";

const initialState = {
       tripList:[],
        status: 'idle',
        error: null
    }

export const getAdminTrips = createAsyncThunk('adminTrips/gettrips', async() => {
    const res = await instance.get('/admin/trips')
    return res.data
})

export const tripSlice = createSlice({
    name:'adminTrips',
    initialState,
    reducers: {},
    extraReducers: {
        [getAdminTrips.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getAdminTrips.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.tripList = action.payload
        },

        [getAdminTrips.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

const adminTripReducer  = tripSlice.reducer



export default adminTripReducer