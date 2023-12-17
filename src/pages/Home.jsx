import React, { useState, useEffect } from "react";
import Sidenav from "../components/Sidenav";
import Content from "./Content";

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
        <div className="mx-auto flex items-center px-3 py-3">
          <Content class_theme={class_theme} />
        </div>
      </div>
    </div>
  );
}

export default Home;
