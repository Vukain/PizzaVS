import React, { createContext, useState } from 'react';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [pizzaUnoData, setPizzaUnoData] = useState({ size: 0, count: 0, price: 0, surface: 0, value: 0 });
  const [pizzaDueData, setPizzaDueData] = useState({ size: 0, count: 0, price: 0, surface: 0, value: 0 });

  const pizzaData = {
    uno: { getPizzaData: pizzaUnoData, setPizzaData: setPizzaUnoData },
    due: { getPizzaData: pizzaDueData, setPizzaData: setPizzaDueData },
  };

  return <AppContext.Provider value={pizzaData}>{children}</AppContext.Provider>;
};
