import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import { setError, unsetError } from '../../actions/ui'
import { useSelector } from 'react-redux'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'

const RegisterScreen = () => {
    const dispatch = useDispatch()
    const { msgError } = useSelector((state) => state.ui)

    const [formValues, handleInputChange] = useForm({
        name: 'alberto',
        email: 'joqtan@mail.com',
        password: 'Password12.',
        passwordConfirm: 'Password12.',
    })

    const { name, email, password, passwordConfirm } = formValues

    const isFormValid = () => {
        if (validator.isEmpty(name, { ignore_whitespace: true })) {
            dispatch(setError('name is required'))
            return false
        } else if (!validator.isEmail(email)) {
            dispatch(setError('a valid email is required'))
            return false
        } else if (!validator.isStrongPassword(password)) {
            dispatch(setError('you should provide a strong password'))
            return false
        } else if (!validator.equals(password, passwordConfirm)) {
            dispatch(setError(`passwords doesn't match`))
            return false
        }
        dispatch(unsetError())
        return true
    }

    const handleRegister = (e) => {
        e.preventDefault()
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }

    return (
        <>
            <h3 className='auth__title mb-5'>Register</h3>
            <form onSubmit={handleRegister}>
                {msgError && (
                    <div className='auth__alert-error'>{msgError}</div>
                )}
                <label className='auth__label'>Name</label>
                <input
                    type='text'
                    name='name'
                    autoComplete='off'
                    className='auth__input'
                    placeholder='Your name'
                    value={name}
                    onChange={handleInputChange}
                />
                <label className='auth__label'>Email</label>
                <input
                    type='text'
                    name='email'
                    autoComplete='off'
                    className='auth__input'
                    placeholder='Your email'
                    value={email}
                    onChange={handleInputChange}
                />
                <label className='auth__label'>Password</label>
                <input
                    type='password'
                    name='password'
                    className='auth__input'
                    placeholder='New password'
                    value={password}
                    onChange={handleInputChange}
                />
                <label className='auth__label'>Password</label>
                <input
                    type='password'
                    name='passwordConfirm'
                    className='auth__input'
                    placeholder='Confirm password'
                    value={passwordConfirm}
                    onChange={handleInputChange}
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
