import './Form.css'
import Item from '../Item/Item'
import { v4 as uuidv4 } from 'uuid';

import {useState} from 'react'

function Form(){

    const [toDoList, setToDoList] = useState([
        // {txt: 'Apprendre les bases de React', id: uuidv4()},
    ])

    const [stateInput, setStateInput] = useState('')

    const [errorMessage, setErrorMessage] = useState('')

    const deleteElement = (id) => {
        const filteredState = toDoList.filter((item) => item.id !== id)
        setToDoList(filteredState)
    }

    const linkedInput = (e) => {
        setStateInput(e)
    }

    const addTodo = (e) => {
        e.preventDefault()

        if(stateInput === ''){
            setErrorMessage('Veuillez renseigner une tache !')
        } else {
            const newArr = [...toDoList, {
                txt: stateInput, id: uuidv4()
            }]
            setToDoList(newArr)
            setStateInput('')
            setErrorMessage('')
        }

        
    }

    return (
        <div>
            <form
            onSubmit={e => addTodo(e)}>
                <label htmlFor="toDo">Choses à faire</label>
                <input 
                onInput={e => linkedInput(e.target.value)}
                type="text" 
                name='toDo' 
                id="toDo"
                value={stateInput || ''}
                />
                <input 
                type="submit" 
                value="Ajouter"/>
                <p>{errorMessage}</p>
            </form>
            <div className='list-container'>
                <h2>Liste des choses à faire : </h2>
                <ul className="list">
                    {toDoList.map((item) => {
                        return (
                            <Item
                            txt={item.txt}
                            key={item.id}
                            id={item.id}
                            deleteFunc={deleteElement}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>

    )

}

export default Form;