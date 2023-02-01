import logo from './logo.svg';
import './App.css';
import Square from "./Square";

const propVariable = 'This is a prop'

function App() {
  return (
    <div className="App">
      <Square propVar={propVariable}/>
      
    </div>
  );
}

export default App;
