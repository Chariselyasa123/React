import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('Adek')}>Samlekom KK</button>
        </div>
    )
}

export default ChildComponent
