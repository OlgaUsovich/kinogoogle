import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setIsAuth(true) : setIsAuth(false);
    });
    setLoading(false);
  }, [auth]);

  return [loading, isAuth];
};
