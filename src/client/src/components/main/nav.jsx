import React from 'react';
import { NavLink } from 'react-router-dom';

export function Nav() {
  const getNavLinkClass = (isActive) => {
    return isActive ? 'font-bold border-b hover:text-blue-300' : 'hover:text-blue-300';
  };

  return (
    <div className='w-full h-auto mb-10'>
      <nav className="text-white w-7/10 pt-5 mx-auto max-w-screen-lg">
        <ul className="flex justify-between items-center p-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              <img src="/images/logo-road-score.png" alt="Road Score Logo" className="h-12 pt-1 w-auto" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/introduction"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              로드스코어 소개
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/social-mapping"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              소셜매핑 소개
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/data-management"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              데이터 관리
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/citizen-perception"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              시민체감지수
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trends"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              국내외동향
            </NavLink>
          </li>
          {/* <li className="relative">
          <button className="px-3 py-2 rounded-md hover:text-blue-300 focus:outline-none focus:shadow-outline">KO</button>
          <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
            <NavLink
              to="/language/ko"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              Korean
            </NavLink>
            <NavLink
              to="/language/en"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              English
            </NavLink>
          </div>
        </li> */}
        </ul>
      </nav>
    </div>
  );
}
