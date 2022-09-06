import { Navigate } from "react-router-dom";
import { ROUTE } from "../../routers";
import { logOutUser } from "../../store/features/userSlice";
import { useAppDispatch } from "../../store/hooks";

export const LogOut = () => {
  const dispatch = useAppDispatch();
  dispatch(logOutUser());
  return <Navigate to={ROUTE.HOME} />;
};
