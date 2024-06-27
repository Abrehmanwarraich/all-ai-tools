import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './nav';
import Home from './components/home';
import Allcategory from './components/allcategory';
import SubmitAiTools from './components/submitaitools';
import Saved from './components/saved';
import Reviewtools from './components/reviewtools';
import Toolprofile from './components/toolprofile';

function App() {
  return (
       <div> 
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='allcategory' element={<Allcategory/>}/>
        <Route path='submitaitools' element={<SubmitAiTools/>}/>
        <Route path='admin/submitaitools' element={<SubmitAiTools/>}/>
        <Route path='saved' element={<Saved/>}/>
        <Route path='admin' element={<Reviewtools/>}/>
        <Route path='toolprofile' element={<Toolprofile/>}/>
        
    
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
