import styles from './App.module.css';
import { myTasks } from '../Data/data';
import Task from '../Task';

function App() {
  let name = "ETHANNN" //Définition d'une variable
    
  const listTaches = myTasks.map(tache=>
    <Task key={tache.id} {...tache}/> //Pour chaque tache (...), ça affiche ce qui est dans le composant Task
  )

  return (
    <div className="App">
      Hello {name} !!!
      <h2 className={styles.title}>Taches à réaliser</h2> {/* Définit le style sur title qui est dans la variable style qu'on importe */}
      <ul>
        {listTaches} {/* Affiche la variable listTaches */}
      </ul>
    </div>
  );
}

export default App;