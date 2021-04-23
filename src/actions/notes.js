import { types } from '../types/types'
import { db } from '../firebase/firebaseConfig'
import { loadNotes } from '../helpers/loadNotes'

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote)
        dispatch(activeNote(docRef.id, newNote))
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: { id, ...note },
})

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid)
        dispatch(setNote(notes))
    }
}

export const setNote = (notes) => ({
    type: types.notesLoad,
    payload: notes,
})
