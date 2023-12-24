import React, {createContext, useContext} from "react";
import {DateTime} from "luxon";


const DateContext = createContext();


export const DateProvider = ({children}) => {
  const currentDate = DateTime.local();
  const isNewYear = currentDate >= DateTime.local(currentDate.year, 1, 1) && currentDate <= DateTime.local(currentDate.year, 1, 5);
  const isSummer = currentDate >= DateTime.local(currentDate.year, 6, 21) && currentDate <= DateTime.local(currentDate.year, 9, 21);
  const isHalloween = currentDate >= DateTime.local(currentDate.year, 10, 31) && currentDate <= DateTime.local(currentDate.year, 11, 2);
  const isChristmas = currentDate >= DateTime.local(currentDate.year, 12, 24) && currentDate <= DateTime.local(currentDate.year, 12, 26);

  ///////// Below for Testing Purposes: /////////
  // const isNewYear = currentDate >= DateTime.local(currentDate.year, 11, 1) && currentDate <= DateTime.local(currentDate.year, 12, 26);

  const contextValue = {
    isNewYear,
    isSummer,
    isHalloween,
    isChristmas,
  };

  return <DateContext.Provider value={contextValue}>{children}</DateContext.Provider>;
};

export const useDate = () => {
  return useContext(DateContext);
};
