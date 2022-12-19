import {GooglrLogin} from "react-google-login";
import './App.css';

function App() {
  return (
    <div className="App">
      <GoggleLogin
      ClientId=""
      onSuccess={response}
      onFaliure={}
      />
     
    </div>
  );
}

export default App;
