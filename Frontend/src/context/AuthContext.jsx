import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  useEffect(() => {
    const stored = localStorage.getItem("token");
    if (stored) {
      // check if token is expired
      try {
        const payload = JSON.parse(atob(stored.split(".")[1]));
        if (payload.exp * 1000 > Date.now()) {
          setToken(stored); // still valid
        } else {
          localStorage.removeItem("token"); // expired, clear it
        }
      } catch {
        localStorage.removeItem("token"); // malformed token
      }
    }
    setLoading(false);
  }, []);

  const login = (token,user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setToken(token);
    setUser(user); 
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); 
    setToken(null);
  };

  if (loading) return null; // don't render anything until token is checked

  return (
    <AuthContext.Provider value={{ token, login, logout,user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);