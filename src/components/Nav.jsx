import React from "react";

export default function Nav() {
  const menuItems = ["About", "Projects", "Contact"];

  return (
    <div className="flex items-center z-10 sticky top-0 justify-between md:justify-center bg-zinc-50 shadow-sm max-w-full px-4 py-4">
      <div className="text-center">
        <a className="cursor-pointer text-2xl sm:text-start font-bold">
          Adham Hamdy
        </a>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal hidden md:flex px-1">
          {menuItems.map((i) => {
            return (
              <li key={i}>
                <a>{i}</a>
              </li>
            );
          })}
        </ul>

        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-circle swap swap-rotate">
            <input type="checkbox" />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-4 font-bold text-xl shadow bg-base-100 rounded-box w-52"
          >
            {menuItems.map((i) => {
              return (
                <li key={i}>
                  <a>{i}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
