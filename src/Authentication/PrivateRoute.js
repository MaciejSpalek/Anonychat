import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const [ roomID, setRoomID ] = useState("");

    useEffect(()=> {
        // setRoomID()
    }, [roomID])

    return (
        <Route
        {...rest}
        path={`/${roomID}`}
        render={routeProps =>
            roomID ? (
            <RouteComponent {...routeProps} />
            ) : (
            <Redirect to={"/"} />
            )
        }
        />
    );
};


export default PrivateRoute