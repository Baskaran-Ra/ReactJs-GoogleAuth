
import { signInWithGoogle,logout } from "./Firebase";
import './App.css';


function App() {
 
  export const logout=() =>{
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className="App">
        <button onClick={logout}>Sign out With Google </button>
     <button onClick={signInWithGoogle}>Sign In With Google </button>

    
     <h1>{localStorage.getItem("name")}</h1>
     <h1>{localStorage.getItem("email")}</h1>
     <img src={localStorage.getItem("profilePic")}/>
     
    </div>
     
  );

}



export default App;
