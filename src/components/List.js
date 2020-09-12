import React from 'react'
import Person from './Person'

function List() {
    const person = [
        {
            id: 1,
            name: 'Charis',
            umur: '20',
            skill: 'React'
        },
        {
            id: 2,
            name: 'Naufal',
            umur: '21',
            skill: 'PHP'
        },
        {
            id: 3,
            name: 'Fadil',
            umur: '22',
            skill: 'Javascript'
        }
    ]

    const personList = person.map(person => <Person person={person}/>)
    return <div>{personList}</div>
}

export default List
