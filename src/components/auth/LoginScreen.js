import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'

const LoginScreen = () => {
    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({
        email: 'name@mail.com',
        password: 'password',
    })

    const { email, password } = formValues

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(startLoginEmailPassword(email, password))
    }
    const handleGooogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    return (
        <>
            <h3 className='auth__title mb-5'>Login</h3>
            <form onSubmit={handleLogin}>
                <label className='auth__label'>Email</label>
                <input
                    type='text'
                    name='email'
                    autoComplete='off'
                    className='auth__input'
                    value={email}
                    onChange={handleInputChange}
                />
                <label className='auth__label'>Password</label>
                <input
                    type='text'
                    name='password'
                    className='auth__input'
                    value={password}
                    onChange={handleInputChange}
                />
                <button className='btn btn-primary btn-block' type='submit'>
                    Login
                </button>
                <div className='auth__social-networks'>
                    <p>Login with social networks</p>
                    <div className='google-btn' onClick={handleGooogleLogin}>
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
                <Link to='/auth/register' className='link'>
                    Create new account
                </Link>
            </form>
        </>
    )
}

export default LoginScreen
