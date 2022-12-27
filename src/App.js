import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './pages/User';
import Result from './pages/Result';
import Ovarian from './pages/Ovarian';
import Physics from './pages/Physics';
import Sliders from './pages/Sliders';
import Graph from './pages/Graph';
import LinearGraph from './pages/LinearGraph';
import NextPage from './pages/NextPage';
import DoctorList from './pages/DoctorList';
import Loader from './pages/Loader'

function App() {
  
  return (
    <>
    <Loader />
    <div className="parent-main">
    <User />
    <Result />
    <Ovarian />
    <Graph />
    <LinearGraph/>
    <NextPage/>
    <DoctorList />
    <Physics/> 
    </div>
    <Sliders/>
    </>  
  );
}

export default App;
