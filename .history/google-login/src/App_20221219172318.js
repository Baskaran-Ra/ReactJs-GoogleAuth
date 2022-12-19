
import { signInWithGoogle } from "./Firebase";
import './App.css';


function App() {
  return (
    <div className="App">
     <button onClick={signInWithGoogle}>Sign In With Google </button>
     <h>{localStorage.getItem("name")}</h>
     <h>{localStorage.getItem("email")}</h>
     <img src={localStorage.getItem("profilePic")}
     
    </div>
  );
}

export default App;
