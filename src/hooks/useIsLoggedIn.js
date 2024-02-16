import { createContext, useState, useContext } from "react";

const IsLoggedInContext = createContext(false);

export const IsLoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <IsLoggedInContext.Provider value={{ isLoggedIn, toggleLoginStatus }}>
      {children}
    </IsLoggedInContext.Provider>
  );
};

export const useIsLoggedIn = () => useContext(IsLoggedInContext);
