import React from 'react';
import octocat from '../../../assets/github-app-img/octocat.png';
import { useState } from 'react';
import search from '../../../assets/github-app-img/icon-search.svg';
import dayjs from 'dayjs';
import useDarkMode from '../../../hook/useDarkMode';

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
              <svg height="20" width="14" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z"
                  fill="#4b6a9b"
                  className="dark:fill-gLightLightGray transition duration-300"
                />
              </svg>
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
              <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <g fill="#4b6a9b">
                  <path
                    d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z"
                    className="dark:fill-gLightLightGray transition duration-300"
                  />
                  <path
                    d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z"
                    className="dark:fill-gLightLightGray transition duration-300"
                  />
                </g>
              </svg>
              {githubData.website === null ? (
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
              <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z"
                  fill="#808080"
                  className="transition duration-300"
                />
              </svg>
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
              <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <g fill="#4b6a9b">
                  <path
                    d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z"
                    className="dark:fill-gLightLightGray transition duration-300"
                  />
                </g>
              </svg>
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
