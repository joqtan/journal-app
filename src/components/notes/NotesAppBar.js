import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes'

const NotesAppBar = () => {
    const { active } = useSelector((state) => state.notes)

    const dispatch = useDispatch()

    const handleSaveNote = () => {
        dispatch(startSaveNote(active))
    }

    return (
        <div className='notes__app-bar'>
            <span>August 28th, 2021</span>
            <div>
                <button className='btn'>Picture</button>
                <button className='btn' onClick={handleSaveNote}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default NotesAppBar
