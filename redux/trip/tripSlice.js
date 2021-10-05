import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../helpers/axios";

const initialState = {
       tripList:[],
        status: 'idle',
        error: null
    }

export const getTrips = createAsyncThunk('trips/gettrips', async() => {
    const res = await instance.get('/public/trips')
    return res.data
})

export const tripSlice = createSlice({
    name:'trips',
    initialState,
    reducers: {},
    extraReducers: {
        [getTrips.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getTrips.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.tripList = action.payload
        },

        [getTrips.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

const tripReducer  = tripSlice.reducer



export default tripReducer