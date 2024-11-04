import React, { createContext, useContext } from "react";
import { DateTime } from "luxon";


const DateContext = createContext();


export const DateProvider = ({ children }) => {
  const currentDate = DateTime.local();
  const isNewYear =
    currentDate >= DateTime.local(currentDate.year, 1, 1) &&
    currentDate <= DateTime.local(currentDate.year, 1, 7);
  const isSummer =
    currentDate >= DateTime.local(currentDate.year, 6, 1) &&
    currentDate <= DateTime.local(currentDate.year, 9, 30);
  const isHalloween =
    currentDate >= DateTime.local(currentDate.year, 10, 1) &&
    currentDate <= DateTime.local(currentDate.year, 10, 31);
  const isChristmas =
    currentDate >= DateTime.local(currentDate.year, 12, 1) &&
    currentDate <= DateTime.local(currentDate.year, 12, 31);


  ///////// Below for Testing Purposes: /////////
  // const isNewYear = currentDate >= DateTime.local(currentDate.year, 11, 1) && currentDate <= DateTime.local(currentDate.year, 12, 26);


  const contextValue = {
    isNewYear,
    isSummer,
    isHalloween,
    isChristmas,
  };


  return (
    <DateContext.Provider value={contextValue}>{children}</DateContext.Provider>
  );
};


export const useDate = () => {
  return useContext(DateContext);
};
