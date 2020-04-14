import React from 'react'


const Button = ({handleClick, className, children}) => {
    return (
        <button className={className}
        onClick={handleClick}
        >{children}</button>
    )
}

export default Button
