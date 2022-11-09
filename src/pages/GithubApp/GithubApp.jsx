import React from 'react';
import Header from '../../components/Header';
import './GithubApp.css';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import useDarkMode from '../../hook/useDarkMode';

function GithubApp() {
  useDarkMode();
  return (
    <>
      <div>
        <Header title="Github App" />
        <div className="dark:bg-gDarkDarGray g-body h-screen bg-gLightLightGray transition duration-300 ">
          <div className=" w-[90%] mx-auto pt-[50px] 2xl:pt-[100px] md:w-[70%] 2xl:w-[800px]  ">
            <Navbar />
            <Container />
          </div>
        </div>
      </div>
    </>
  );
}

export default GithubApp;
