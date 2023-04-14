import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {BrowserRouter as Router,Route,Link, Routes} from 'react-router-dom'

function App() {

    const [mode, setMode] = useState('white')
    const [alert,setAlert] = useState(null)

    const showAlert = (message,type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 3000);
    }
    const toggleMode = () => {
      if(document.getElementById('mySelect').value === 'light'){
        setMode('white')
        document.body.style.backgroundColor = 'white'
        showAlert("Light Mode has been enabled","success")
      }else if(document.getElementById('mySelect').value === 'dark'){
        setMode('#04295e')
        document.body.style.backgroundColor = '#04295e'
        showAlert("Dark Mode has been enabled","success")
      }else if(document.getElementById('mySelect').value === 'green'){
        setMode('green')
        document.body.style.backgroundColor = 'green'
        showAlert("Green Mode has been enabled","success")
      }else if(document.getElementById('mySelect').value === 'blue'){
        setMode('blue')
        document.body.style.backgroundColor = 'blue'
        showAlert("Blue Mode has been enabled","success")
      }
    }
    return (
      <>
     <Router>
     <Navbar title="Home" link="About" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>
    <div className='container my-3'>
      <Routes>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter Text Below" mode={mode}></TextForm>}></Route>
      
      </Routes>
    
    </div>
      </Router> 
    
    
    
      </>
      
    );
}

export default App;
