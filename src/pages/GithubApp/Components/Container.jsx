import React from 'react';
import octocat from '../../../assets/github-app-img/octocat.png';
import location from '../../../assets/github-app-img/icon-location.svg';
import website from '../../../assets/github-app-img/icon-website.svg';
import twiiter from '../../../assets/github-app-img/icon-twitter.svg';
import company from '../../../assets/github-app-img/icon-company.svg';
import { useState } from 'react';
import search from '../../../assets/github-app-img/icon-search.svg';
import dayjs from 'dayjs';

function Container() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState('');
  const [githubData, setGithubData] = useState({
    name: 'The Octocat',
    avatar_url: octocat,
    join_date: '25 Jan 2011',
    username: 'octocat',
    bio: 'This user has no bio',
    followers: '3938',
    following: '9',
    public_repos: '8',
    location: 'San Francisco',
    blog: 'https://github.blog',
    twitter_username: 'Not Available',
    company: '@github',
  });

  const handleShowClick = async () => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();

    if (!data.message) {
      setGithubData({
        name: data.name,
        avatar_url: data.avatar_url,
        username: data.login,
        bio: data.bio,
        join_date: dayjs(data.created_at)
          .format('DD/MMM/YYYY')
          .split('/')
          .join(' '),
        followers: data.followers,
        following: data.following,
        public_repos: data.public_repos,
        location: data.location,
        blog: data.blog,
        twitter_username: data.twitter_username,
        company: data.company,
      });
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <div className="mt-10 relative bg-white rounded-xl shadow-xl">
        <input
          className="  bg-white h-16 rounded-xl   w-[100%] placeholder:text-gLightDarkBlue pl-10 text-sm md:placeholder:text-xl md:text-xl md:pl-16 "
          placeholder="Search GitHub username.. "
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <img
          className="absolute bottom-5 left-2 md:left-5"
          src={search}
          alt=""
        />
        <button
          className="absolute right-2 bottom-2 bg-gLightBlue text-white p-3 rounded-xl hover:opacity-70"
          onClick={handleShowClick}
          disabled={user === '' ? true : false}
          style={{ color: user === '' ? '#C8C8C8' : '#fff' }}
        >
          Search
        </button>
        {show && <div className="g-no-result-msg">User not found !</div>}
      </div>
      <div className="mt-5 bg-white rounded-xl shadow-2xl px-5 py-10 md:px-10 2xl:pl-40 2xl:relative">
        <div className="flex items-center justify-around md:justify-start 2xl:ml-5 ">
          <img
            className="rounded-full w-[100px] 2xl:absolute 2xl:left-10 2xl:top-10 2xl:w-[130px]"
            src={githubData.avatar_url}
            alt=""
          />
          <div className="md:ml-8">
            <h1 className="text-xl font-[900] 2xl:text-2xl">
              {githubData.name}
            </h1>
            <p className="text-gLightBlue">{githubData.username}</p>
            <p className="text-gLightGray 2xl:absolute right-10 top-10">
              Joined ff
            </p>
          </div>
        </div>
        {githubData.bio === null ? (
          <p className=" text-gLightGray mt-8 leading-[25px] 2xl:ml-14">
            No bio yet
          </p>
        ) : (
          <p className=" text-gLightGray mt-8 leading-[25px] 2xl:ml-14">
            {githubData.bio}
          </p>
        )}
        <div className="mt-14 bg-gLightLightGray px-5 py-7 rounded-xl flex justify-around 2xl:p-4  2xl:ml-12 ">
          <div className="text-center md:text-start">
            <p className="text-gLightDarkBlue">Repos</p>
            <p className="mt-2 font-[900] md:text-2xl">
              {githubData.public_repos}
            </p>
          </div>
          <div className=" text-center md:text-start ">
            <p className="text-gLightDarkBlue">Followers</p>
            <p className="mt-2 font-[900]  md:text-2xl">
              {githubData.followers}
            </p>
          </div>
          <div className=" text-center md:text-start ">
            <p className="text-gLightDarkBlue">Following</p>
            <p className="mt-2 font-[900] md:text-2xl">
              {githubData.following}
            </p>
          </div>
        </div>
        <div className="  flex flex-col justify-around flex-wrap mt-8 md:flex-row md:h-[70px] 2xl:justify-start 2xl:ml-12  ">
          <div>
            <div className="flex">
              <img src={location} alt="" />
              {githubData.location === null ? (
                <p className="ml-4 text-gLightDarkBlue">Not Available</p>
              ) : (
                <p className="ml-4 text-gLightDarkBlue">
                  {githubData.location}
                </p>
              )}
            </div>
            <div className="flex mt-2 md:mt-5 ">
              <img src={website} alt="" />
              {githubData.website === null ? (
                <a className="ml-4 text-gLightDarkBlue hover:underline" href="">
                  Not Available
                </a>
              ) : (
                <a
                  className="ml-4 text-gLightDarkBlue hover:underline"
                  href={githubData.blog}
                >
                  {githubData.blog}
                </a>
              )}
            </div>
          </div>
          <div className="2xl:ml-20">
            <div className="flex mt-2 md:mt-0">
              <img src={twiiter} alt="" />
              {githubData.twitter_username === null ? (
                <p className="ml-4 text-gLightGray">Not Available</p>
              ) : (
                <p className="ml-4 text-gLightGray">
                  {githubData.twitter_username}
                </p>
              )}
            </div>
            <div className="flex mt-2 md:mt-5">
              <img src={company} alt="" />
              {githubData.company === null ? (
                <p className="ml-4 text-gLightDarkBlue">Not Available</p>
              ) : (
                <p className="ml-4 text-gLightDarkBlue">{githubData.company}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;
