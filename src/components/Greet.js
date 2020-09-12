import React from 'react'

// function Greet () {
//     return <h1>Samlekom!</h1>
// }

export const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>Samlekom! {name} a.k.a {heroName}</h1>
        </div>
    ) 
}

// export default Greet