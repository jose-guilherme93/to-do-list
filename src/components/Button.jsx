import React from 'react'
import './Button.css'

const Button = ({onClick, children}) => {
    return (
        <div>
            <button onClick={onClick} className="button">
            {children}
            </button>
        </div>
    )
}

export default Button;