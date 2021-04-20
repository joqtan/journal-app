import React from 'react'
import { Redirect, Route } from 'react-router'

const PublicRoute = ({ isLoggedIn, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            component={(props) =>
                isLoggedIn ? <Redirect to='/' /> : <Component {...props} />
            }
        />
    )
}

export default PublicRoute
