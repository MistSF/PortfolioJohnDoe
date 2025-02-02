import { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [coordonnees, setCoordonnees] = useState({
        adresse: '40 rue Laure Diebold',
        codePostal: '69009',
        ville: 'Lyon',
        pays: 'France',
        telephone: '10 20 30 40 50',
        email: 'john.doe@gmail.com'
    });

    return (
        <MyContext.Provider value={{ coordonnees, setCoordonnees }}>
            {children}
        </MyContext.Provider>
    )
}