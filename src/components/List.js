import React from 'react'
import Person from './Person'

function List() {
    const names = ['Charis', 'Naufal', 'Fadil', 'Charis']
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

const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>)
    return <div>{nameList}</div>
}

export default List
