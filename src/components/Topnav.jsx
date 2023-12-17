import React from "react";

function Topnav(props) {
  const onClickHandler = (parameterValue) => {
    props.func(parameterValue);
  };
  return (
    <div>
      <aside className="block md:hidden">
        <div className="flex bg-white text-neutral-900 shadow-xl">
          <nav className="flex-1">
            <ul className="flex gap-y-2 py-2">
              {/* Light */}
              <li className="px-2">
                <div
                  className="flex cursor-pointer justify-between items-center gap-2 rounded-md hover:shadow-neutral-300 hover:shadow-md px-3 py-2"
                  onClick={() => onClickHandler("light")}
                >
                  <button value={"light"}>Light</button>
                  <div className="flex gap-1 items-center">
                    <div className="h-5 w-5 bg-white border border-black rounded-sm"></div>
                    <div className="h-5 w-5 bg-black rounded-sm"></div>
                  </div>
                </div>
              </li>

              {/* Dark */}
              <li className="px-2">
                <div
                  className="flex cursor-pointer justify-between items-center gap-2 rounded-md hover:shadow-neutral-300 hover:shadow-md px-3 py-2"
                  onClick={() => onClickHandler("dark")}
                >
                  <button value={"dark"}>Dark</button>
                  <div className="flex gap-1 items-center">
                    <div className="h-5 w-5 bg-white border border-black rounded-sm"></div>
                    <div className="h-5 w-5 bg-black rounded-sm"></div>
                  </div>
                </div>
              </li>

              {/* Red */}
              <li className="px-2">
                <div
                  className="flex cursor-pointer justify-between items-center gap-2 rounded-md hover:shadow-neutral-300 hover:shadow-md px-3 py-2"
                  onClick={() => onClickHandler("red")}
                >
                  <button value={"red"}>Red</button>
                  <div className="flex gap-1 items-center">
                    <div className="h-5 w-5 bg-[#7f1d1d] rounded-sm"></div>
                    <div className="h-5 w-5 bg-[#facc15] rounded-sm"></div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default Topnav;
