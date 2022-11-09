import React from 'react';
import Header from '../../components/Header';
import HeroSection from './HeroSection/HeroSection';
import '../../pages/Equalizer/HeroSection/HeroSection.css';
import MainSection from './MainSection/MainSection';
import Footer from './Footer';

function Equalizer() {
  return (
    <>
      <Header title="Equalizer" />
      <div className="eq--body">
        <HeroSection />
        <MainSection />
        <Footer />
      </div>
    </>
  );
}

export default Equalizer;
