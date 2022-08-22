import './Form.css'
import Item from '../Item/Item'
import { v4 as uuidv4 } from 'uuid';

import {useState} from 'react'

function Form(){

    const [dataArr, setDataArr] = useState([
        {txt: 'Apprendre les bases de React', id: uuidv4()},
        {txt: 'Apprendre Redux', id: uuidv4()},
        {txt: 'Coder 3, 4 projets avec React', id: uuidv4()}
    ])

    const deleteElement = (id) => {
        const filteredState = dataArr.filter((item) => item.id !== id)
        setDataArr(filteredState)
    }


    return (
        <div>
            <form>
                <label htmlFor="toDo">Choses à faire</label>
                <input type="text" name='toDo' id="toDo"/>
                <input type="submit" value="Ajouter"/>
            </form>
            <div className='list-container'>
                <h2>Liste des choses à faire : </h2>
                <ul className="list">
                    {dataArr.map((item) => {
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