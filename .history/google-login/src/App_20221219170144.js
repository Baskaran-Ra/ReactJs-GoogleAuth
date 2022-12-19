
import {signInwithGoogle} from "./Firebase";
import './App.css';


function App() {
  return (
    <div className="App">
     <button onClick={signInwithGoogle}>Sign In With Google </button>
     
    </div>
  );
}

export default App;
