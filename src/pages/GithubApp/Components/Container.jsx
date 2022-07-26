import React from 'react';
import octocat from '../../../assets/github-app-img/octocat.png';
import location from '../../../assets/github-app-img/icon-location.svg';
import website from '../../../assets/github-app-img/icon-website.svg';
import twiiter from '../../../assets/github-app-img/icon-twitter.svg';
import company from '../../../assets/github-app-img/icon-company.svg';

function Container() {
  return (
    <div className="mt-5 bg-white rounded-xl shadow-xl px-5 py-10">
      <div className="flex items-center justify-around">
        <img className="rounded-full w-[100px]" src={octocat} alt="" />
        <div>
          <h1 className="text-xl font-[900]">The Octocat</h1>
          <p className="text-gLightBlue">@octocat</p>
          <p className="text-gLightGray">Joined 25 Jan 2021</p>
        </div>
      </div>
      <p className=" text-gLightGray mt-8 leading-[25px]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <div className="mt-8 bg-gLightLightGray px-5 py-7 rounded-xl flex justify-around ">
        <div className="text-center">
          <p className="text-gLightDarkBlue">Repos</p>
          <p className="mt-2 font-[900]">8</p>
        </div>
        <div className=" text-center ">
          <p className="text-gLightDarkBlue">Followers</p>
          <p className="mt-2 font-[900]">3938</p>
        </div>
        <div className=" text-center ">
          <p className="text-gLightDarkBlue">Following</p>
          <p className="mt-2 font-[900]">9</p>
        </div>
      </div>
      <div className="flex flex-col justify-around h-[150px] flex-wrap mt-8">
        <div className="flex">
          <img src={location} alt="" />
          <p className="ml-2">San Francisco</p>
        </div>
        <div className="flex ">
          <img src={website} alt="" />
          <a className="ml-2" href="https://github.blog">
            https://github.blog
          </a>
        </div>
        <div className="flex">
          <img src={twiiter} alt="" />
          <p className="ml-2 text-gLightGray">Not Available</p>
        </div>
        <div className="flex">
          <img src={company} alt="" />
          <p className="ml-2">github</p>
        </div>
      </div>
    </div>
  );
}

export default Container;
