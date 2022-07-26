// import React from 'react';
// import octocat from '../../../assets/github-app-img/octocat.png';
// import search from '../../../assets/github-app-img/icon-search.svg';
// import { useState } from 'react';

// function SearchBar() {
// const [show, setShow] = useState(false);
// const [user, setUser] = useState('');
// const [githubData, setGithubData] = useState({
//   name: 'The Octocat',
//   avatar_url: octocat,
//   join_date: '25 Jan 2011',
//   username: 'octocat',
//   bio: 'This user has no bio',
//   followers: '3938',
//   following: '9',
//   public_repos: '8',
//   location: 'San Francisco',
//   blog: 'https://github.blog',
//   twitter_username: 'Not Available',
//   company: '@github',
// });

// const handleShowClick = async () => {
//   const response = await fetch(`https://api.github.com/users/${user}`);
//   const data = await response.json();

//   if (!data.message) {
//     setGithubData({
//       name: data.name,
//       avatar_url: data.avatar_url,
//       username: data.login,
//       bio: data.bio,
//       followers: data.followers,
//       following: data.following,
//       public_repos: data.public_repos,
//       location: data.location,
//       blog: data.blog,
//       twitter_username: data.twitter_username,
//       company: data.company,
//     });
//     setShow(false);
//   } else {
//     setShow(true);
//   }
// };
// return (

// );
// }

// export default SearchBar;
