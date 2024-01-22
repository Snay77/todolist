import styles from './TodoList.module.css';
import { myTasks } from '../Data/data';
import { useState } from 'react';
import Task from '../Task';



function TodoList () {
    const [name,setName] = useState("")

    const listTaches = myTasks.map(tache=>
        <Task key={tache.id} {...tache}/> //Pour chaque tache (...), ça affiche ce qui est dans le composant Task
      )

    function changeVal(e){
        e.preventDefault() /* Évite que ça repasse directement sur du vide quand on submit */
        alert(name)
    }


    return (
        <>
            <ul>
                {listTaches} {/* Affiche la variable listTaches */}
            </ul>

            <form onSubmit={changeVal}> {/* Quand on submit, ça fait la fonction changeVal */}
                <input type="text" name='texte' value={name} onChange={e=>setName(e.target.value)}/> {/* onChange -> actualise la variable d'état */}
                <button>Ok</button> {/* Permet de submit */}
            </form>
        </>
    )
}

export default TodoList;