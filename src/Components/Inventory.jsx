import { Link, Outlet } from "react-router-dom";
import React from 'react'


export const Inventory = () => {
    return (
        <>
        <div>
            <h1>Game Inventory Mini Project</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Inventory</Link>
                    </li>
                    <li>
                        <Link to={"weapons"}>Weapons</Link>
                    </li>
                    <li>
                        <Link to={"shields"}>Shields</Link>
                    </li>
                    <li>
                        <Link to={"armor"}>Armor</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
        </>
    )
}
