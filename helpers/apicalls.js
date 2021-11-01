import instance from "./axios"
 
export const baseURL = "https://trans21app.herokuapp.com/api/v1"
export const create = async(user) => {
    try {
        let res = await instance.post('/users/create', user )
        return await res
    } catch (err) {
        console.log(err)
    }
}

export const placeBooking = async( params, quantity) => {
    try {
        let res = await instance.patch('/users/booking/' + params.tripId + "/" +params.id , quantity )
        return await res
    } catch (err) {
        console.log(err)
 
    }
}

export const postTrip = async(params, tripDetails) => {
    try {
        let res = await instance.post("/admin/trips/by/" +params.id , tripDetails )
        return await res
    } catch (err) {
        console.log(err)
 
    }
}


export const getMyTrips = async(params) => {
    try {
        let res = await instance.get("/users/trips/by/" +params.userId )
        return await res
    } catch (err) {
        console.log(err)
 
    }
}

export const getMyHandledTickets = async(params) => {
    try {
        let res = await instance.get("/admin/tickets/handledBy/" +params.adminId )
        return await res
    } catch (err) {
        console.log(err)
 
    }
}

export const removeTrip = async(tripId) => {
    try {
        const res = await instance.delete("/admin/trips/" + tripId)
        return await res
    } catch (e) {
        console.log(e)
    }
}


