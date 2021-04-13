import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import LoginScreen from '../components/auth/LoginScreen'
import RegisterScreen from '../components/auth/RegisterScreen'

const AuthRouter = () => {
    return (
        <div className=''>
            <Switch>
                <Route exact path='/auth/login' component={LoginScreen} />
                <Route exact path='/auth/register' component={RegisterScreen} />
                <Redirect to='/auth/login' />
            </Switch>
        </div>
    )
}

export default AuthRouter