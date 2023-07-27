const RouteInThisFrameIsNotFound = function(route_name) {
    return new Error(`"${route_name}" frame is not found`)
}

export default RouteInThisFrameIsNotFound