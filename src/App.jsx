import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<App />} />
        <Route exact path='/' element={<App />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App;
