import React, { createContext, useContext, useState } from "react";


// Create a context
const ScrollContext = createContext();


// Create custom hook to access the context
export function useScrolling() {
  return useContext(ScrollContext);
}


export function useScrollTo() {
  return useContext(ScrollContext);
}


export function useScrollOnTop() {
  return useContext(ScrollContext);
}


export function useInitialScroll() {
  return useContext(ScrollContext);
}


// Create a provider component
export function ScrollProvider({ children }) {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTo, setScrollTo] = useState(false);
  const [scrollOnTop, setScrollOnTop] = useState(true);
  const [initialScroll, setInitialScroll] = useState(false);


  return (
    <ScrollContext.Provider
      value={{
        scrolling,
        setScrolling,
        scrollTo,
        setScrollTo,
        scrollOnTop,
        setScrollOnTop,
        initialScroll,
        setInitialScroll,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
