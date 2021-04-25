import { types } from '../types/types'
import { db } from '../firebase/firebaseConfig'
import { loadNotes } from '../helpers/loadNotes'
import Swal from 'sweetalert2'
import { fileUpload } from '../helpers/fileUpload'

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

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        if (!note.url) {
            delete note.url
        }
        const noteToFirestore = { ...note }
        delete noteToFirestore.id
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore)
        dispatch(refreshNote(note.id, noteToFirestore))
        Swal.fire('saved', note.title, 'success')
    }
}

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: { id, note: { id, ...note } },
})

export const startUpload = (file) => {
    return async (dispatch, getState) => {
        const { active: activeNote } = getState().notes
        Swal.fire({
            title: 'Uploading',
            text: 'Please wait a moment',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading()
            },
        })
        const fileUrl = await fileUpload(file)
        activeNote.url = fileUrl
        dispatch(startSaveNote(activeNote))
        Swal.close()
    }
}

export const startDelete = (id) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid

        await db.doc(`${uid}/journal/notes/${id}`).delete()

        dispatch(deleteNote(id))
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id,
})
