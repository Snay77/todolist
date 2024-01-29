import styles from './Task.module.css';
import { myTasks } from '../Data/data';
import { useState } from 'react';

function Task (props) {
    const [barre, setBarre] = useState(false); /* barre --> nom de la variable / setBarre --> actualise la variable / useState(x) = définit l'état par défaut à x */

    function doubleClic(name) {
        console.log(name)
    }

    function barrer(){
        setBarre(true) /* définit la variable barre sur l'inverse (avec !) de barre */
        let v = myTasks.find(x=>x.id===props.id)
        v.status=true
        console.log(myTasks)
    }


    return (
        <li 
            className={barre?styles.line:styles.visible} /* définit le style avec un if en fonction de la valeur de barre */
            onDoubleClick={e=>doubleClic(props.name)} 
            onClick={e=>barrer()}/* Quand on clique, execute la fonction barrer */> 
            {props.name} {/* Affiche le champ nom du tableau my tasks définit dans le composant App */}
        </li>
    )
}

export default Task;