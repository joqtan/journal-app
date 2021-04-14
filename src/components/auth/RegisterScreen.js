import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
    return (
        <>
            <h3 className='auth__title mb-5'>Register</h3>
            <form>
                <label className='auth__label'>Name</label>
                <input
                    type='text'
                    name='name'
                    autoComplete='off'
                    className='auth__input'
                    placeholder='Your name'
                />
                <label className='auth__label'>Email</label>
                <input
                    type='text'
                    name='email'
                    autoComplete='off'
                    className='auth__input'
                    placeholder='Your email'
                />
                <label className='auth__label'>Password</label>
                <input
                    type='text'
                    name='password'
                    className='auth__input'
                    placeholder='New password'
                />
                <label className='auth__label'>Password</label>
                <input
                    type='text'
                    name='passwordConfirm'
                    className='auth__input'
                    placeholder='Confirm password'
                />
                <button
                    className='btn btn-primary btn-block mb-5'
                    type='submit'
                >
                    Login
                </button>
                <Link to='/auth/login' className='link'>
                    Sing in instead
                </Link>
            </form>
        </>
    )
}

export default RegisterScreen
