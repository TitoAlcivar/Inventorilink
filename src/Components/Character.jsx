import { Link, Outlet } from "react-router-dom";
import React from 'react'

export const Character = () => {
  return (
    <div>
      <h1>Pnn</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Character</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
