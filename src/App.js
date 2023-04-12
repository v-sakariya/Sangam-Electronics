import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
    return (
      <>
      
    <Navbar title="Home" link="Link"></Navbar>
    <div className='container my-3'>
    <TextForm heading="Enter Text Below"></TextForm>
    </div>
    
    
      </>
      
    );
}

export default App;
