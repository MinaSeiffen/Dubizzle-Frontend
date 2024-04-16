import React from 'react'

export default function ButtonNavigatePages({pageName,iconPage}) {
    return (
        
        <nav class="grid grid-flow-col gap-1 my-2  justify-start ">
            <div className='flex me-3 items-stretch'>
                {iconPage}
            </div>
            <div>
               {pageName}
            </div>
        </nav>
    )
}
