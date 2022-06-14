
import './App.css';
import Team from './components/Molecules/team';
import CV from './containers/CV';

function App() {
  return (
    <div className="App">
      
      <CV >{/* ici placer une nav avec les différent onglet */}</CV>
      <Team ></Team>

    </div>
  );
}

export default App;
