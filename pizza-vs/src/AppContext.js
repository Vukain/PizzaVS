import React, { createContext, useState } from 'react';

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {

    const [pizzaUnoData, setPizzaUnoData] = useState({size: 0, count: 1, price: 0, value: 0});
    const [pizzaDueData, setPizzaDueData] = useState({size: 0, count: 1, price: 0, value: 0});



    return (<AppContext.Provider value={{
        pizzaUnoData, setPizzaUnoData,
        pizzaDueData, setPizzaDueData
    }}>
        {children}
    </AppContext.Provider>);
}

export default AppProvider;