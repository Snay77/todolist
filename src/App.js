import logo from './logo.svg';
import './App.css';
import { myTasks } from './Data/data';

function App() {
  let name = "ETHANNNNNNN"
    
  const listTaches = myTasks.map(tache=>
    <li>{tache.name}</li>
    )


  return (
    <div className="App">
      Hello {name} !!!!!!!!!!!!!!!!!!!!!!!!!!!
      <ul>
        {listTaches}
      </ul>
    </div>
  );
}

export default App;