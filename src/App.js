import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

    const [mode, setMode] = useState('light')
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
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#04295e'
        showAlert("Dark Mode has been enabled","success")
      }else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light Mode has been enabled","success")
      }
    }
    return (
      <>
      
    <Navbar title="Home" link="Link" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>
    <div className='container my-3'>
    <TextForm showAlert={showAlert} heading="Enter Text Below" mode={mode}></TextForm>
    {/* <About></About> */}
    </div>
    
    
      </>
      
    );
}

export default App;
