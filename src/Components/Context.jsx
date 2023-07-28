import React, { createContext, useState } from "react";



export const UserContext = createContext(null);

export default function Context({ children }) {

    const [link, setLink] = useState(null);


   

    return (
        <UserContext.Provider value={[link, setLink]}>
            {children}
        </UserContext.Provider>
    )
}