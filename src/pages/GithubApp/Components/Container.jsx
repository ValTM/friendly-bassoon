import React from 'react';
import octocat from '../../../assets/github-app-img/octocat.png';
import { useState } from 'react';
import search from '../../../assets/github-app-img/icon-search.svg';
import dayjs from 'dayjs';
import useDarkMode from '../../../hook/useDarkMode';
import LocationIcon from './SocialIcons/LocationIcon';
import LinkIcon from './SocialIcons/LinkIcon';
import TwitterIcon from './SocialIcons/TwitterIcon';
import CompanyIcon from './SocialIcons/CompanyIcon';

function Container() {
  const [show, setShow] = useState('');
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
  useDarkMode();

  const handleShowClick = async () => {
    try {
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="transition duration-300 dark:bg-gDarkBlue mt-10 relative bg-white rounded-xl shadow-xl">
        <input
          className="transition duration-300 dark:bg-gDarkBlue dark:text-gLightLightGray  bg-white h-16 rounded-xl   w-[100%] placeholder:text-gLightDarkBlue pl-10 text-sm md:placeholder:text-xl md:text-xl md:pl-16 dark:placeholder:text-gLightLightGray"
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
        {show && (
          <div className="absolute -top-8 right-0 text-[red] font-bold md:top-5 md:right-28">
            No results!
          </div>
        )}
      </div>
      <div className="dark:bg-gDarkBlue mt-5 bg-white rounded-xl shadow-2xl px-5 py-10 md:px-10 2xl:pl-40 2xl:relative transition duration-300">
        <div className="flex items-center justify-around md:justify-start 2xl:ml-5 ">
          <img
            className="rounded-full w-[100px] 2xl:absolute 2xl:left-10 2xl:top-10 2xl:w-[130px] transition duration-300"
            src={githubData.avatar_url}
            alt=""
          />
          <div className="md:ml-8">
            <h1 className="dark:text-gLightLightGray text-xl font-[900] 2xl:text-2xl transition duration-300">
              {githubData.name}
            </h1>
            <p className="text-gLightBlue">{githubData.username}</p>
            <p className="dark:text-gLightLightGray text-gLightGray 2xl:absolute right-10 top-10 transition duration-300">
              Joined {githubData.join_date}
            </p>
          </div>
        </div>
        {githubData.bio === null ? (
          <p className="dark:text-gLightLightGray text-gLightGray mt-8 leading-[25px] 2xl:ml-14 transition duration-300">
            No bio yet
          </p>
        ) : (
          <p className="dark:text-gLightLightGray text-gLightGray mt-8 leading-[25px] 2xl:ml-14 transition duration-300">
            {githubData.bio}
          </p>
        )}
        <div className="dark:bg-gDarkDarGray mt-14 bg-gLightLightGray px-5 py-7 rounded-xl flex justify-around 2xl:p-4  2xl:ml-12 transition duration-300">
          <div className="text-center md:text-start">
            <p className="dark:text-gLightLightGray text-gLightDarkBlue transition duration-300">
              Repos
            </p>
            <p className="dark:text-gLightLightGray mt-2 font-[900] md:text-2xl transition duration-300">
              {githubData.public_repos}
            </p>
          </div>
          <div className=" text-center md:text-start ">
            <p className="dark:text-gLightLightGray text-gLightDarkBlue transition duration-300">
              Followers
            </p>
            <p className=" dark:text-gLightLightGray mt-2 font-[900]  md:text-2xl transition duration-300">
              {githubData.followers}
            </p>
          </div>
          <div className=" text-center md:text-start ">
            <p className="dark:text-gLightLightGray text-gLightDarkBlue transition duration-300">
              Following
            </p>
            <p className="dark:text-gLightLightGray mt-2 font-[900] md:text-2xl transition duration-300">
              {githubData.following}
            </p>
          </div>
        </div>
        <div className=" w-[100%] flex flex-col justify-around flex-wrap mt-8 2xl:justify-start 2xl:ml-12 2xl:flex-row ">
          <div>
            <div className="flex">
              <LocationIcon />
              {githubData.location === null ? (
                <p className="dark:text-gLightLightGray ml-4 text-gLightDarkBlue transition duration-300">
                  Not Available
                </p>
              ) : (
                <p className="dark:text-gLightLightGray ml-4 text-gLightDarkBlue transition duration-300">
                  {githubData.location}
                </p>
              )}
            </div>
            <div className="flex mt-2 md:mt-5 break-all   2xl:w-[300px] ">
              <LinkIcon />
              {!githubData.blog ? (
                <p className="dark:text-gLightLightGray ml-4 text-gLightDarkBlue transition duration-300">
                  Not Available
                </p>
              ) : (
                <a
                  className=" dark:text-gLightLightGray ml-4 text-gLightDarkBlue hover:underline transition duration-300"
                  href={githubData.blog}
                  target="blank"
                >
                  {githubData.blog}
                </a>
              )}
            </div>
          </div>
          <div className="2xl:ml-20">
            <div className="flex mt-2 md:mt-5 2xl:mt-0">
              <TwitterIcon />
              {githubData.twitter_username === null ? (
                <p className="dark:text-gLightLightGray ml-4 text-gLightGray transition duration-300">
                  Not Available
                </p>
              ) : (
                <p className="dark:text-gLightLightGray ml-4 text-gLightGray transition duration-300">
                  {githubData.twitter_username}
                </p>
              )}
            </div>
            <div className="flex mt-2 md:mt-5">
              <CompanyIcon />
              {githubData.company === null ? (
                <p className="dark:text-gLightLightGray ml-4 text-gLightDarkBlue transition duration-300">
                  Not Available
                </p>
              ) : (
                <p className="dark:text-gLightLightGray ml-4 text-gLightDarkBlue transition duration-300">
                  {githubData.company}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;
