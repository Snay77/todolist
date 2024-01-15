import styles from './App.module.css';
import { myTasks } from '../Data/data';
import Task from '../Task';

function App() {
  let name = "ETHANNNNNNN"
    
  const listTaches = myTasks.map(tache=>
    <Task key={tache.id} {...tache}/>
  )

  return (
    <div className="App">
      Hello {name} !!!!!!!!!!!!!!!!!!!!!!!!!!!
      <h2 className={styles.title}>Taches à réaliser</h2>
      <ul>
        {listTaches}
        {/* {myTasks.map(tache=>
          <li>{tache.name}</li>
          )} */}
      </ul>
    </div>
  );
}

export default App;