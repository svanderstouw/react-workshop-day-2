import React from 'react'

import Button from './Button'

const Counter = props => (
    <main>
        <Button
            behavior={props.decrement}
            color={'blue'}
            textContent={"Decrement"} />
        <p>{props.count}</p>
        <Button
            behavior={props.increment}
            color={'red'}
            textContent={"Increment"} />
    </main>
)

export default Counter