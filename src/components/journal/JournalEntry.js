import React from 'react'

const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage:
                        'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFqbmIvrNUn4kG__2p5TiFHjy1OqTzJ2BAP6A9q4vs-6iC9XXy772pBF8azfd9ysKdwI&usqp=CAU)',
                }}
            ></div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>A new day</p>
                <p className='journal__entry-content'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}

export default JournalEntry
