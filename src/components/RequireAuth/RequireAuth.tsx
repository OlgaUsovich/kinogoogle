import { Navigate, Outlet } from "react-router-dom";
import { getUserIsLoadingSelector, getUserInfoSelector, useAppSelector } from "store";
import { ROUTE } from "routers";
import { Spinner } from "components";

export const RequireAuth = () => {
  const user = useAppSelector(getUserInfoSelector);
  const isLoading = useAppSelector(getUserIsLoadingSelector);
  if (isLoading) {
    return <Spinner />;
  }
  return user ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
