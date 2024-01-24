import React from "react";

function Header() {
  return (
    <header className="py-5 border-gray-500 border-b">
      <div className="container m-auto">
        <div className="flex justify-between items-center">
          <div className="logo">
            <a href="/">Logo</a>
          </div>
          <nav>
            <ul className="flex">
              <li className="mx-5">
                <a href="/">Home</a>
              </li>
              <li className="mx-5">
                <a href="/">Movies</a>
              </li>
              <li className="mx-5">
                <a href="/">Web series</a>
              </li>
            </ul>
          </nav>
          <div className="search">
            <form id="searchForm" className="flex">
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 me-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
