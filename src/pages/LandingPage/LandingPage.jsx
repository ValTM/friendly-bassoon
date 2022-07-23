import React from 'react';
import './LandingPage.css';
import Card from '../../components/Card';
import loopstudio from '../../assets/loopstudio.png';
import equalizer from '../../assets/equalizer.png';
import tipsCalculator from '../../assets/tips-calculator.png';
import githubApp from '../../assets/github-user-search-app.png';
import ecommerce from '../../assets/ecommerce.png';

function LandingPage() {
  return (
    <>
      <div className=" homeContainer container bg-white shadow-2xl mx-auto  flex  flex-col justify-center text-center  sm:mt-20 lg:mt-32  ">
        <h1 className="inline-block mt-20 text-2xl font-sans sm:text-4xl ">
          Welcome to the Home Page
        </h1>
        <p className="mt-3 text-1xl font-sans sm:text-2xl">
          Here you can see{' '}
          <span className="text-red-600">all the projects</span>
        </p>
        <div className=" flex flex-col mx-auto  mt-10 mb-20 lg:flex-row lg:flex-wrap lg:justify-center">
          {' '}
          <Card url="/loopstudio" title="loopstudio" image={loopstudio} />
          <Card url="/equalizer" title="equalizer" image={equalizer} />
          <Card
            url="/tips-calculator"
            title="tips-calculator"
            image={tipsCalculator}
          />
          <Card
            url="/github-user-search-app"
            title="github app"
            image={githubApp}
          />
          <Card url="/ecommerce" title="ecommerce" image={ecommerce} />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
