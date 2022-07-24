import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import MainSection from './MainSection/MainSection';
import Header from '../../components/Header';
import './Loopstudio.css';

function Loopstudio() {
  return (
    <>
      <Header title="Loopstudio" />
      <HeroSection />
      <MainSection />
    </>
  );
}

export default Loopstudio;
