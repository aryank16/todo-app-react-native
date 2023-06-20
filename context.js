
import React, { useState, createContext } from 'react';

export const TodoContext = createContext();

export const TodoProvider = props => {
    const [todo, setTodo] = useState([
        {
            title: 'Washing Clothes',
            description:'kapde dho',
            id: '0',
            dueDate:'12-3-22'
        },
        {
            title: 'Continue 2D Unity Project',
            description:'kapde dho',
            id: '1',
            dueDate:'12-3-22'
        },
        {
            title: 'Complete React Native Tuts',
            description:'kapde dho',
            id: '2',
            dueDate:'12-3-22'
        }
    ]);

    return (
        <TodoContext.Provider value={[todo, setTodo]}>
            {props.children}
        </TodoContext.Provider>
    )
}