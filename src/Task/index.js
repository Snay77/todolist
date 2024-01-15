import styles from './Task.module.css';
import { myTasks } from '../Data/data';

function Task (props) {
    function doubleClic(name) {
        console.log(name)
    }

    console.log(props)
    return (
        <li onDoubleClick={e=>doubleClic(props.name)}>{props.name}</li>
    )
}

export default Task;