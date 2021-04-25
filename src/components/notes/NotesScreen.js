import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NotesAppBar from './NotesAppBar'
import { useForm } from '../../hooks/useForm'
import { activeNote, startDelete } from '../../actions/notes'

const NotesScreen = () => {
    const dispatch = useDispatch()
    const { active: note } = useSelector((state) => state.notes)

    const activeId = useRef(note.id)

    const [formValues, handleInputChange, reset] = useForm(note)

    const { title, body } = formValues

    const handleDelete = () => {
        dispatch(startDelete(note.id))
    }

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note)
            activeId.current = note.id
        }
    }, [note, reset])
    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }))
    }, [formValues, dispatch])

    return (
        <div className='notes__main-content'>
            <NotesAppBar />
            <div className='notes__content'>
                <input
                    onChange={handleInputChange}
                    type='text'
                    name='title'
                    value={title}
                    placeholder='some awesome title'
                    className='notes__title-input'
                    autoComplete='off'
                />
                <textarea
                    onChange={handleInputChange}
                    name='body'
                    value={body}
                    placeholder='What happened today'
                    className='notes__textarea'
                ></textarea>
                {note.url && (
                    <div className='notes__image'>
                        <img src={note.url} alt='note' />
                    </div>
                )}
            </div>
            <button className='btn btn-danger' onClick={handleDelete}>
                Delete
            </button>
        </div>
    )
}

export default NotesScreen
