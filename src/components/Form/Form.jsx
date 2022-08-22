import './Form.css'
import Item from '../Item/Item'

import {useState} from 'react'

function Form(){

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

                </ul>
            </div>
        </div>

    )

}

export default Form;