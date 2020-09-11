import React from 'react'

// Pake JSX
export const HelloJSX = () => {
    return(
        <div className="ini-kelas">
            <h1>Ini pake JSX</h1>
        </div>
    )

}

// kalo ga pake JSX kita ga perlu import REaCT library
export const HelloGaPakeJSX = () => {
    return React.createElement('div', {id: "hello", className: "ini-kelas"}, React.createElement('h1', null, 'ini ga pake jsx'))

}

