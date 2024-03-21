import react, { useState, useContext, useEffect, createContext } from 'react';
import axios from 'axios';

export const UserContext = createContext({});
export const useUser = () => useContext(UserContext);

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (!user) {
            axios.get('/profile').then((response) => {
                setUser(response.data);
            })
        }
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}