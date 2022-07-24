import React from 'react';
import Header from '../../components/Header';
import HeroSection from './HeroSection/HeroSection';
import '../../pages/Equalizer/HeroSection/HeroSection.css';
import MainSection from './MainSection/MainSection';

function Equalizer() {
  return (
    <>
      <Header title="Equalizer" />
      <div className="eq--body">
        <HeroSection />
        <MainSection />
      </div>
    </>
  );
}

export default Equalizer;
