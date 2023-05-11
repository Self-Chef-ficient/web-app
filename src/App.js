import logo from './logo.svg';
import './App.css';
import SignInSide from './views/SignInSide';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './views/SignUp';
import HomePage from "./views/HomePage"
import Likedis from './views/Likedis';
import RR from './views/RR';
import FoodRecommendations from './views/FoodRecommendation';
import Frop from './views/Frop';
import GridTest from "./views/GridTest"

function App() {
  return (
    //<div className="App">
     <BrowserRouter> 
     <div className='App'>
      <Routes>
      <Route exact path="/signup" element={<SignUp/>}></Route>
     <Route exact path="/" element={<SignInSide/>}></Route>
     <Route exact path="/HomePage" element={<HomePage/>}></Route>
     <Route exact path="/Likedis" element={<Likedis/>}></Route>
     <Route exact path="/RR" element={<RR/>}></Route>
     <Route exact path="/FoodRec" element={<FoodRecommendations/>}></Route>
     <Route exact path="/Frop" element={<Frop/>}></Route>
     <Route exact path="/GridTest" element={<GridTest/>}></Route>
     </Routes>
     </div>
     </BrowserRouter>
   // </div>
  );
}

export default App;
