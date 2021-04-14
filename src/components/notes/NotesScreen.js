import React from 'react'
import NotesAppBar from './NotesAppBar'

const NotesScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />
            <div className='notes__content'>
                <input
                    type='text'
                    placeholder='some awesome title'
                    className='notes__title-input'
                    autoComplete='off'
                />
                <textarea
                    placeholder='What happened today'
                    className='notes__textarea'
                ></textarea>
                <div className='notes__image'>
                    <img src='https://picsum.photos/1000/150' alt='note' />
                </div>
            </div>
        </div>
    )
}

export default NotesScreen
