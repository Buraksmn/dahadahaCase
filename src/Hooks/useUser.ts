import { useEffect, useState } from "react";

const logout = () => {
  localStorage.removeItem("daha-user");
  window.location.reload();
};
const login = () => {
  localStorage.setItem("daha-user", "true");
  window.location.reload();
};

const useUser = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("daha-user");
    if (user) setUser(true);
  }, []);

  return {
    user,
    setUser,
    logout,
    login,
  };
};

export default useUser;
