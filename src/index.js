import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import{
  Navigation, Home, ImpermanentLoss, AprToApy, ApyToApr, Background, ImpermanentLossAdvanced
} from "./components";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGUYMAPt876xkPLC3keRTcXMW_rY-gdx4",
  authDomain: "deficalcs.firebaseapp.com",
  projectId: "deficalcs",
  storageBucket: "deficalcs.appspot.com",
  messagingSenderId: "250369902879",
  appId: "1:250369902879:web:387860af2a90e7b8e0082a",
  measurementId: "G-4N5VLM7FS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
