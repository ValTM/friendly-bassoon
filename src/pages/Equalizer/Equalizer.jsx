import React from 'react';
import Header from '../../components/Header';

function Equalizer() {
  return (
    <>
      <div>
        <Header title="Equalizer" />
        <div className="eq--body font-sans">
          <HeroSection />
          <MainSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Equalizer;
