import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const SelectedProjectContext = createContext();
export const SelectedProjectsProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState("INBOX");

  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);

SelectedProjectContext.propTypes = {
  children: PropTypes.node.isRequired,
};
