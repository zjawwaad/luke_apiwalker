import './App.css';
import FetchPEOPLE from './components/FetchPEOPLE.js';
import Form from './components/Form'
import FetchPLANETS from './components/FetchPLANETS.js';
import FetchSTARSHIPS from './components/FetchSTARSHIPS.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <header className='App-header'>
    <Form/>
    <Routes>
      <Route path='/people/:id' element={<FetchPEOPLE/>}/>
      <Route path='/planets/:id' element={<FetchPLANETS />}/>
      <Route path='/starships/:id' element={ <FetchSTARSHIPS />}/>
    </Routes>


    
    </header>
    </div>
  );
}

export default App;
