import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      {theme !== "dark" ? (
        <BsMoon className="theme_dark_icon" onClick={toggleTheme} />
      ) : (
        <BsSun className="theme_light_icon" onClick={toggleTheme} />
      )}
    </div>
  );
};

export default ThemeSwitch;
