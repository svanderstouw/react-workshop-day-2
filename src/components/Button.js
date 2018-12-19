import React from 'react'

const Button = ({color, behavior, textContent}) => {
    const buttonStyle = {
        backgroundColor: color
    }
    return <button 
                style={buttonStyle} 
                onClick={behavior}
                >{textContent}</button>
}

export default Button