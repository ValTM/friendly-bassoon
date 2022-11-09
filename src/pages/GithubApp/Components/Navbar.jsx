import React from 'react';
import useDarkMode from '../../../hook/useDarkMode';
import SunIcon from '../Components/SocialIcons/SunIcon';
import MoonIcon from '../Components/SocialIcons/MoonIcon';

function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();
  const themeInfo = {
    light: { svg: <SunIcon />, text: 'LIGHT', color: 'gLightDarkBlue' },
    dark: { svg: <MoonIcon />, text: 'DARK', color: 'black' },
  };

  return (
    <div className="flex justify-between items-center ">
      <h1 className="dark:text-white text-2xl font-[900]transition duration-300">
        devifinder
      </h1>
      <div className="group cursor-pointer ">
        <div
          className="flex justify-between items-center w-[90px]"
          onClick={() => setTheme(colorTheme)}
        >
          <p
            className={`dark:text-gLightLightGray text-gLightDarkBlue font-[900] tracking-widest group-hover:text-${themeInfo[colorTheme].color} transition duration-300`}
          >
            {themeInfo[colorTheme].text}
          </p>
          {themeInfo[colorTheme].svg}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
