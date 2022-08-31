import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "../../routers";

export const RequireAuth = () => {
    const isAuth = false;
    return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />
}