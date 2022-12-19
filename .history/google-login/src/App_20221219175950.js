
import { signInWithGoogle,signOutWithGoogle } from "./Firebase";
import './App.css';


function App() {
  const logout
  return (
    <div className="App">
     <button onClick={signInWithGoogle}>Sign In With Google </button>
     <button onClick={logout}>Sign out With Google </button>
     <h1>{localStorage.getItem("name")}</h1>
     <h1>{localStorage.getItem("email")}</h1>
     <img src={localStorage.getItem("profilePic")}/>
     
    </div>
  );
}

export default App;
