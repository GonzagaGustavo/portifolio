import React from 'react'
import './Button.css'

function Button({children}) {
    return (
        <div className='button-container'>
            <button className='button'>{children}</button>
        </div>
    )
}

export default Button;
