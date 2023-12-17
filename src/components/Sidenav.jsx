import React, { useState, useEffect } from "react";

function Sidenav(props) {
  const [buttonState, setButtonState] = useState(null);
  const colorData = [
    { name: "light", backgroundColors: ["white", "black"] },
    { name: "dark", backgroundColors: ["#111827", "#f87171"] },
    { name: "red", backgroundColors: ["#7f1d1d", "#facc15"] },
  ];

  useEffect(() => {
    const storedColor = localStorage.getItem("buttonColor");
    if (storedColor) {
      setButtonState(storedColor);
    }
  }, []);

  const onClickHandler = (parameterValue) => {
    props.func(parameterValue);
    const newColor = buttonState === parameterValue ? null : parameterValue;
    setButtonState(newColor);

    localStorage.setItem("buttonColor", newColor);
  };

  return (
    <div>
      <div className="sticky top-0 flex md:min-h-screen md:w-56 w-full md:flex-col flex-row bg-white text-neutral-900 shadow-xl">
        <nav className="flex-1">
          <ul className="flex md:flex-col flex-row gap-y-2 py-2">
            {colorData.map((color) => (
              <li key={color.name} className="px-2">
                <button
                  className="rounded-md hover:shadow-neutral-300 hover:shadow-md px-3 py-2 w-full"
                  // change background color if it's active
                  style={{
                    backgroundColor:
                      buttonState === color.name ? "#6B7280" : "",
                    color: buttonState === color.name ? "white" : "",
                  }}
                  onClick={() => onClickHandler(color.name)}
                  value={color.name}
                  disabled={buttonState === color.name}
                >
                  <div className="flex justify-between">
                    {/* displaying the names of the theme */}
                    <p>
                      {color.name.charAt(0).toUpperCase() + color.name.slice(1)}
                    </p>

                    {/* map the colors */}
                    <div className="flex gap-1 items-center">
                      {color.backgroundColors.map((bgColor, index) => (
                        <div
                          key={index}
                          className="h-5 w-3 rounded-lg"
                          style={{
                            backgroundColor: bgColor,

                            border:
                              color.name === "light" &&
                              color.backgroundColors[0] === "white"
                                ? "1px solid #000000"
                                : "", // Add border for white color
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidenav;
