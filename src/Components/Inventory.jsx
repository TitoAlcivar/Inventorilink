import { Link, Outlet } from "react-router-dom";
import React from 'react'
import { Context } from "./Context";


export const Inventory = () => {
    // const { link, setLink } = useContext(Context);
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
                            <Link to={"Character"}>Character</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>

        </>
    )
}
