import React from 'react'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    return (
        <div className=''>
            <h3 className='auth__title mb-5'>Login</h3>
            <form>
                <label className='auth__label'>Email</label>
                <input
                    type='text'
                    name='email'
                    autoComplete='off'
                    className='auth__input'
                />
                <label className='auth__label'>Password</label>
                <input type='text' name='password' className='auth__input' />
                <button className='btn btn-primary btn-block' type='submit'>
                    Login
                </button>
                <div className='auth__social-networks'>
                    <p>Login with social networks</p>
                    <div className='google-btn'>
                        <div className='google-icon-wrapper'>
                            <img
                                className='google-icon'
                                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                                alt='google button'
                            />
                        </div>
                        <p className='btn-text'>
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to='/auth/register'>Create new account</Link>
            </form>
        </div>
    )
}

export default LoginScreen
