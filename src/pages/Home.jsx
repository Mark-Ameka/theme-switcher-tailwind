import React, { useState, useEffect } from "react";
import Topnav from "../components/Topnav";
import Sidenav from "../components/Sidenav";
import Main from "./Main";

function Home(props) {
  const [class_theme, setClassTheme] = useState("");
  console.log(class_theme);

  useEffect(() => {
    const selected_theme = localStorage.getItem("theme");
    if (selected_theme) {
      setClassTheme(selected_theme);
    }
  }, []);

  const handleThemeChange = (theme) => {
    setClassTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div>
      <div className="flex md:flex-row flex-col">
        <Sidenav func={handleThemeChange} />
        <Topnav func={handleThemeChange} />
        <div className="mx-auto md:max-w-4xl max-w-md">
          <Main class_theme={class_theme} />
        </div>
      </div>
    </div>
  );
}

export default Home;
