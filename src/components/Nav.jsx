import React from "react";

export default function Nav() {
  return (
    <>
      <div className="navbar bg-zinc-50 shadow-sm ">
        <div className="navbar-start">
          <a className="cursor-pointer text-2xl asap-condensed-bold">
            Adham Hamdy
          </a>
        </div>
        <div className="navbar-end lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
