import './Item.css'

function Item(props){

    return (
        <li>
            <p>{props.txt}</p>
            <button onClick={() => props.deleteFunc(props.id)}>X</button>
        </li>
    )

}

export default Item;