

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider,signInWithPopup,signOut } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAFiYyglWyqAOcW5AQTUlDQTxCx0l02wak",
  authDomain: "charismatic-age-372110.firebaseapp.com",
  projectId: "charismatic-age-372110",
  storageBucket: "charismatic-age-372110.appspot.com",
  messagingSenderId: "29021198630",
  appId: "1:29021198630:web:ae29b08742088ca38089e7",
  measurementId: "G-Q81R1VVPJB"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => {
    signInWithPopup(auth,provider).then((result) =>{
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;    

        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("profilePic",profilePic);

    }).catch((error) => {
        console.error();
    }); 

}
export const signOutWithGoogle = () => {
    
    signOutWithGoogle(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
return(
    <div>
        {value? <home/>:
        <button onClick={handleClick}>Sign In With Google </button>
        }
    </div>
);

}