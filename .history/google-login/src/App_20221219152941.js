import React 
import {GooglrLogin} from "react-google-login";
import './App.css';


const responseGoogle=(response)=>{

  console.log(response)
};

function App() {
  return (
    <div className="App">
      <GoggleLogin
      ClientId=""
      onSuccess={responseGoogle}
      onFaliure={responseGoogle}
      />
     
    </div>
  );
}

export default App;
