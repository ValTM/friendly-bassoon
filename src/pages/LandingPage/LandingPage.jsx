import React from 'react';
import './LandingPage.css';
import Card from '../../components/Card';

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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
