import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>Gua {person.name}. Umur gua {person.umur} Tahun. Gua bisa {person.skill}</h2>
        </div>
    )
}

export default Person
