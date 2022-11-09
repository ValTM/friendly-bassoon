import React from 'react';
import Header from '../../components/Header';
import HeroSection from './HeroSection/HeroSection';
import MainSection from './MainSection/MainSection';
import Footer from './Footer/Footer';
import './Loopstudio.css';

function Loopstudio() {
  return (
    <>
      <Header title="Loopstudio" />
      <HeroSection />
      <MainSection />
      <Footer />
    </>
  );
}

export default Loopstudio;
