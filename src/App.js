import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from "react-router-dom";
// // import { Router ,Routes, Route, Switch } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },2000)
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'React App - Dark Mode'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'React App - Light Mode'
    }
  }

  const toggleModeGreen = () => {
    if(mode === 'light') {
      setMode('green');
      document.body.style.backgroundColor = 'green';
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
      {/* <Router> */}
      {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          
          </ul> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModeGreen={toggleModeGreen}/>
        {alert && <Alert alert={alert}/>}
        <div className="container my-3">
        {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path='/'> */}
              <TextForm heading="Enter the text" mode={mode}/>
            {/* </Route> */}
        {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
