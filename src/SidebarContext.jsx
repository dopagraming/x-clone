import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  // const toggleSidebar = () => {
  //   setSidebarVisible((prevState) => !prevState);
  // };

  const closeRightSidebar = () => {
    setSidebarVisible(false);
  };
  return (
    <SidebarContext.Provider value={{ isSidebarVisible, closeRightSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
