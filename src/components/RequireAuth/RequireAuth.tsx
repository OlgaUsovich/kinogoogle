import { getAuth } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "../../routers";

export const RequireAuth = () => {
    const user = getAuth().currentUser;
    return user ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />
}