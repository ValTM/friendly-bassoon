import React from 'react';
import Header from '../../components/Header';
import './GithubApp.css';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';

function GithubApp() {
  return (
    <div>
      <Header title="Github App" />
      <div className="g-body h-screen bg-gLightLightGray">
        <div className="w-[90%] mx-auto pt-10">
          <Navbar />
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default GithubApp;
