
import { signInWithGoogle } from "./Firebase";
import './App.css';


function App() {
  return (
    <div className="App">
     <button onClick={signInWithGoogle}>Sign In With Google </button>
     
    </div>
  );
}

export default App;
