import React from 'react'

const Button = props => {
    const buttonStyle = {
        backgroundColor: props.color
    }
    return <button style={buttonStyle} onClick={props.behavior}>{props.textContent}</button>
}

export default Button