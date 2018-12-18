import React, { Component } from 'react'

import './Headline.css'

class Headline extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const textColor = this.props.isColor ?
        {'color': 'fuchsia'} :
        {'color': 'grey'}
        return (
        <section className="Headline">
            <h1 className="Headline__title" style={textColor}>{this.props.text}</h1>
            <p className="Headline__content">This is some basic dynamic content.</p>
        </section>
        )
    }
}

export default Headline