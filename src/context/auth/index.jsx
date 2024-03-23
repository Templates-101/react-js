// QueryContext.js
import { useState } from "react";
import PropTypes from "prop-types";
import { AuthenticationContext } from "./context";

export const AuthenticationProvider = ({ children }) => {
  const [token, setToken] = useState({
    checked: false,
    valid: false,
  });

  return (
    <AuthenticationContext.Provider
      value={{
        //variables
        token,

        //methods
        setToken,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

AuthenticationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
