
import { signInWithGoogle } from "./Firebase";
import './App.css';


function App() {
  return (
    <div className="App">
     <button onClick={signInWithGoogle}>Sign In With Google </button>
     <h>{localStorage.getItem("name")}</h>
     <h>{localStorage.getItem("name")}</h>
     <img src={localStorage.getItem("profilepic")}
     
    </div>
  );
}

export default App;
