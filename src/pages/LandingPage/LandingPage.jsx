import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <>
      <div className=" homeContainer container bg-white shadow-2xl mx-auto  h-44 flex  flex-col justify-center text-center sm:h-64 sm:mt-20 lg:mt-32  ">
        <h1 className="inline-block mt-2 text-2xl font-sans sm:text-4xl ">
          Welcome to the Home Page
        </h1>
        <p className="mt-3 text-1xl font-sans sm:text-2xl">
          Here you can see{' '}
          <span className="text-red-600">all the projects</span>
        </p>
      </div>
    </>
  );
}

export default LandingPage;
