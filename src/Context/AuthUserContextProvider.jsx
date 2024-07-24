import { useState } from 'react';
import PropTypes from 'prop-types';
import { AuthUserContext } from './AuthUserContext';

export const AuthContextProvider = ({ children }) => {
  
  const [userDataFromGoogleLogin, setUserDataFromGoogleLogin] = useState(null);

  return (
    <AuthUserContext.Provider value={{ userDataFromGoogleLogin, setUserDataFromGoogleLogin }}>
      {children}
    </AuthUserContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
