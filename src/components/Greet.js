import React from 'react'

// function Greet () {
//     return <h1>Samlekom!</h1>
// }

export const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Samlekom! {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    ) 
}

// export default Greet