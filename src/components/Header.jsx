import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 py-6 px-6">
        <div className="navbar-start">
          <Link to="/">
            <a className="btn btn-ghost normal-case text-xl">DreamCareer</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/appliedJobs">Applied Jobs</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn border-none text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800">
            Start Applying
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
