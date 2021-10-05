import instance from "./axios"

export const create = async(user) => {
    try {
        let res = await instance.post('/users/create', user )
        return await res
    } catch (err) {
        console.log(err)
    }
}

export const placeBooking = async( params, tripDetails) => {
    try {
        let res = await instance.patch('/users/booking/' + params.tripId + "/" +params.id , tripDetails )
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

export const removeTrip = async(tripId) => {
    try {
        const res = await instance.delete("/admin/trips/" + tripId)
        return await res
    } catch (e) {
        console.log(e)
    }
}


