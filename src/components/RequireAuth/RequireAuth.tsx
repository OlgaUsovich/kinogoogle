import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ROUTE } from "../../routers";
import { Spinner } from "../Spinner";

export const RequireAuth = () => {
    const [loading, user] = useAuth();
    if ( loading ) {
        return <Spinner/>
    }
    return user ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />
}