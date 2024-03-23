import react, { useState, useContext, useEffect, createContext } from 'react';
import axios from 'axios';

export const UserContext = createContext({});
export const useUser = () => useContext(UserContext);

export function UserContextProvider({ children }) {
    const [user, setUser] = useState({});

    const refetchUser = async () => {
        try {
            const response = await axios.get('/api/auth/user');
            setUser(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        refetchUser();
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}