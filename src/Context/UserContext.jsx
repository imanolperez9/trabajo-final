import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = (props) => {

    const [user, setUser] = useState(null);


  const login = async (username, password) => {
    if (!username || !password) return false;

    const fakeUser = { username, token: "probando" };

    setUser(fakeUser);
    return true; 
  };

  const logout = () => {
   
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ login, logout, user , setUser}}>
      {props.children}
    </UserContext.Provider>
  );
};

const useAuth = () => useContext(UserContext);

export { UserProvider, useAuth };
