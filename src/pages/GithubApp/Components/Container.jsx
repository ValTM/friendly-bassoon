import React from 'react';
import octocat from '../../../assets/github-app-img/octocat.png';
import location from '../../../assets/github-app-img/icon-location.svg';
import website from '../../../assets/github-app-img/icon-website.svg';
import twiiter from '../../../assets/github-app-img/icon-twitter.svg';
import company from '../../../assets/github-app-img/icon-company.svg';

function Container() {
  return (
    <div className="mt-5 bg-white rounded-xl shadow-2xl px-5 py-10 md:px-10 2xl:pl-40 2xl:relative">
      <div className="flex items-center justify-around md:justify-start 2xl:ml-5 ">
        <img
          className="rounded-full w-[100px] 2xl:absolute 2xl:left-10 2xl:top-10 2xl:w-[130px]"
          src={octocat}
          alt=""
        />
        <div className="md:ml-8">
          <h1 className="text-xl font-[900] 2xl:text-2xl">The Octocat</h1>
          <p className="text-gLightBlue">@octocat</p>
          <p className="text-gLightGray 2xl:absolute right-10 top-10">
            Joined 25 Jan 2021
          </p>
        </div>
      </div>
      <p className=" text-gLightGray mt-8 leading-[25px] 2xl:ml-14">
        No bio yet
      </p>
      <div className="mt-14 bg-gLightLightGray px-5 py-7 rounded-xl flex justify-around 2xl:p-4  2xl:ml-12 ">
        <div className="text-center md:text-start">
          <p className="text-gLightDarkBlue">Repos</p>
          <p className="mt-2 font-[900] md:text-2xl">8</p>
        </div>
        <div className=" text-center md:text-start ">
          <p className="text-gLightDarkBlue">Followers</p>
          <p className="mt-2 font-[900]  md:text-2xl">3938</p>
        </div>
        <div className=" text-center md:text-start ">
          <p className="text-gLightDarkBlue">Following</p>
          <p className="mt-2 font-[900] md:text-2xl">9</p>
        </div>
      </div>
      <div className="flex flex-col justify-around flex-wrap mt-8 md:flex-row md:h-[70px] 2xl:justify-start 2xl:ml-12 ">
        <div>
          <div className="flex">
            <img src={location} alt="" />
            <p className="ml-4 text-gLightDarkBlue">San Francisco</p>
          </div>
          <div className="flex mt-2 md:mt-5 ">
            <img src={website} alt="" />
            <a
              className="ml-4 text-gLightDarkBlue hover:underline"
              href="https://github.blog"
            >
              https://github.blog
            </a>
          </div>
        </div>
        <div className="2xl:ml-20">
          <div className="flex mt-2 md:mt-0">
            <img src={twiiter} alt="" />
            <p className="ml-4 text-gLightGray">Not Available</p>
          </div>
          <div className="flex mt-2 md:mt-5">
            <img src={company} alt="" />
            <p className="ml-4 text-gLightDarkBlue">github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
