import logo from './logo.svg';
import './App.css';
import Login from "./loginPage/Login"
import Routing from "./Routing";
import {useEffect} from "react";

import {get_data} from "./api";

function App() {


    useEffect(() => {
        get_data(1000, 1000, 1000).then(res => console.log(res));
    }, []);

  return (
    <div className="App">
      <Routing/>
    </div>
  );
}

export default App;
