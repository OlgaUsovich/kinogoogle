import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "../../routers";
import { useAppSelector } from "../../store/hooks";
import { Spinner } from "../Spinner";

export const RequireAuth = () => {
  const user = useAppSelector((state) => state.users.result);
  const isLoading = useAppSelector((state) => state.users.isLoading);
  if (isLoading) {
    return <Spinner />;
  }
  return user ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
