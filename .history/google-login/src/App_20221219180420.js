
import { signInWithGoogle,signOutWithGoogle } from "./Firebase";
import './App.css';


function App() {
  const logout=() =>{
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className="App">
     <button onClick={signInWithGoogle}>Sign In With Google </button>
    
     <h1>{localStorage.getItem("name")}</h1>
     <h1>{localStorage.getItem("email")}</h1>
     <img src={localStorage.getItem("profilePic")}/>
     
    </div>
     <button onClick={logout}>Sign out With Google </button>
  );
}

export default App;
