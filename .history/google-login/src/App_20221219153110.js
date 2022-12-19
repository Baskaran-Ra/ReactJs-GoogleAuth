
import {GoogleLogin} from "react-google-login";
import './App.css';

const responseGoogle=(response)=>{

  console.log(response)
};

function App() {
  return (
    <div className="App">
      <GoogleLogin
      ClientId=""
      onSuccess={responseGoogle}
      onFaliure={responseGoogle}
      />
     
    </div>
  );
}

export default App;
