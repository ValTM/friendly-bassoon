import React from 'react';
import Header from '../../components/Header';
import './GithubApp.css';
import Navbar from './Components/Navbar';
// import SearchBar from './Components/SearchBar';
import Container from './Components/Container';

function GithubApp() {
  return (
    <>
      <div>
        <Header title="Github App" />
        <div className="g-body h-screen bg-gLightLightGray">
          <div className="w-[90%] mx-auto pt-[100px] md:w-[70%] 2xl:w-[800px]  ">
            <Navbar />
            {/* <SearchBar /> */}
            <Container />
          </div>
        </div>
      </div>
    </>
  );
}

export default GithubApp;
