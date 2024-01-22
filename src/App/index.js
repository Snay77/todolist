import styles from './App.module.css';
import { myTasks } from '../Data/data';
import Task from '../Task';
import TodoList from '../TodoList';

function App() {
  let name = "ETHANNN" //Définition d'une variable

  return (
    <div className="App">
      Hello {name} !!!
      <h2 className={styles.title}>Taches à réaliser</h2> {/* Définit le style sur title qui est dans la variable style qu'on importe */}
      <TodoList/>
    </div>
  );
}

export default App;

{/*  */}