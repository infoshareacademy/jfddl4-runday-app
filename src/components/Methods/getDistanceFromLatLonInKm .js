export const getDistanceFromLatLonInKm = markers => {
    let runDistance = 0
    if (markers.length > 0) {
        markers.reduce((pv, cv, i, arr) => {
            const R = 6371 // Radius of the earth in km
            let dLat = (cv.lat - pv.lat) * Math.PI / 180
            let dLon = (cv.lng - pv.lng) * Math.PI / 180
            let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(pv.lat * Math.PI / 180) * Math.cos(cv.lat * Math.PI / 180) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2)
            let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
            let d = R * c; // Distance in km
            runDistance = runDistance + d
            return cv
        })
    }
    return runDistance
}