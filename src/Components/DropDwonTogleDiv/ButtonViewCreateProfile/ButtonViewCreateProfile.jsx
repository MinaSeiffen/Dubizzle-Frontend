import React from 'react'

export default function ButtonViewCreateProfile({content,func}) {
    return (
        <div className='  text-center px-3'>
            <div className='border-red-400 rounded-md mb-2 border-button'>
                <button onClick={() => {
                  
                    func()
                }}>{content}</button>
            </div>
        </div>
    )
}
