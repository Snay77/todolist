import styles from './Task.module.css';
import { myTasks } from '../Data/data';
import { useState } from 'react';

function Task (props) {
    const [barre, setBarre] = useState(false);

    function doubleClic(name) {
        console.log(name)
    }

    function barrer(){
        setBarre(!barre)
    }

    console.log(props)


    return (
        <li 
            className={barre?styles.line:styles.visible}
            onDoubleClick={e=>doubleClic(props.name)} 
            onClick={barrer}>
            {props.name}
        </li>
    )
}

export default Task;