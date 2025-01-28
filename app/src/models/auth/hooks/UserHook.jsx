import { createContext, useContext, useState } from "react";

const UserContext = createContext({
  user: null,
  setUser: () => null
})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  return <UserContext.Provider value={{ user, setUser }}>
  	{children}
  </UserContext.Provider>
}

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("El UserContext esta siendo usado fuera del provedor")
  }

  return context;
}
