import styles from './TodoList.module.css';
import { myTasks } from '../Data/data';
import { useState } from 'react';
import Task from '../Task';
import { addTask } from '../Data/data';



function TodoList () {
    const [name,setName] = useState("") //On définit la variable d'état sur rien
    const [allTasks, setAllTasks] = useState(myTasks) //On définit la variable d'état sur le tableau MyTasks

    const listTaches = allTasks.map(tache=>
        <Task key={tache.id} {...tache}/> //Pour chaque tache (...), ça affiche ce qui est dans le composant Task
    )

    function changeVal(e){
        e.preventDefault() /* Évite que ça repasse directement sur du vide quand on submit */
        setAllTasks([...addTask(name)])
        alert("Ajout de la tache : " + name)
        setName("")
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