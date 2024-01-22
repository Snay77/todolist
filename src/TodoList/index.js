import styles from './TodoList.module.css';
import { myTasks } from '../Data/data';
import { useState } from 'react';
import Task from '../Task';


function TodoList () {

    const listTaches = myTasks.map(tache=>
        <Task key={tache.id} {...tache}/> //Pour chaque tache (...), ça affiche ce qui est dans le composant Task
      )

    return (
        <ul>
            {listTaches} {/* Affiche la variable listTaches */}
        </ul>
    )
}

export default TodoList;