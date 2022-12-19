import {GooglrLogin} from "react-google-login";
import './App.css';

function App() {
  return (
    <div className="App">
      <GoggleLogin
      ClientId=""
      onSuccess={responseGoogle}
      onFaliure={}
      />
     
    </div>
  );
}

export default App;
