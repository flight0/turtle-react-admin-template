import React from "react";

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

/**
 * This represents some generic auth provider API, like Firebase.
 */
export const authProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    authProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    authProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthContext;
