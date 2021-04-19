import { types } from '../types/types'

export const setError = (err) => ({
    type: types.uiSetError,
    payload: err,
})
export const unsetError = () => ({
    type: types.uiUnsetError,
})

export const startLoading = () => ({
    type: types.uiStartLoading,
})

export const stopLoading = () => ({
    type: types.uiStopLoading,
})
