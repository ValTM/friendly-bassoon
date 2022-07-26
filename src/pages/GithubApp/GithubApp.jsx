import React from 'react';
import Header from '../../components/Header';
import './GithubApp.css';
import Navbar from './Components/Navbar';

function GithubApp() {
  return (
    <div>
      <Header title="Github App" />
      <div className="g-body h-screen bg-gLightLightGray">
        <div className="w-[90%] mx-auto pt-10">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default GithubApp;
