import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUpload } from '../../actions/notes'

const NotesAppBar = () => {
    const { active } = useSelector((state) => state.notes)

    const dispatch = useDispatch()

    const handleSavePicture = () => {
        document.querySelector('#fileSelector').click()
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            dispatch(startUpload(file))
        }
    }

    const handleSaveNote = () => {
        dispatch(startSaveNote(active))
    }

    return (
        <div className='notes__app-bar'>
            <span>August 28th, 2021</span>
            <input
                type='file'
                style={{ display: 'none' }}
                onChange={handleFileChange}
                id='fileSelector'
            />
            <div>
                <button className='btn' onClick={handleSavePicture}>
                    Picture
                </button>
                <button className='btn' onClick={handleSaveNote}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default NotesAppBar
