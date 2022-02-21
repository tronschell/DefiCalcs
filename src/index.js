import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import{
  Navigation, Home, ImpermanentLoss, AprToApy, ApyToApr, Background, ImpermanentLossAdvanced
} from "./components";

ReactDOM.render(
    <Router>
      <Background />
        <Navigation/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Navigation" element={<Navigation />} />
            <Route path="/AprToApy" element={<AprToApy />} />
            <Route path="/ApyToApr" element={<ApyToApr />} />
            <Route path="/ImpermanentLoss" element={<ImpermanentLoss />} />
            <Route path="/ImpermanentLossAdvanced" element={<ImpermanentLossAdvanced />} />


              
          </Routes>
      
  </Router>,
  document.getElementById('root')
);
