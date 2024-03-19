import react, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    useEffect(() =>{
        if(!user){
            axios.get('/user').then((response) => {
                setUser(response.data);
            })
        }
    },[]);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}