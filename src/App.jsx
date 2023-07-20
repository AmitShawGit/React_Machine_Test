import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/menu/Sidebar';
import Question1 from './components/Question1';

const App = () => {
  return (
    <BrowserRouter>
    <div style={{display:"flex"}}>
      <div>
      <Sidebar />
      </div>
      <div>
      <Routes>
        <Route index element={<Home />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/ques' element={<Question1 />} />
      </Routes>
      </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
