import { Navigate } from "react-router-dom";
import { ROUTE } from "../../routers";
import { logOutUser } from "../../store/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const LogOut = () => {
  const dispatch = useAppDispatch();
  const { result, isLoading, error } = useAppSelector(({ users }) => users);
  dispatch(logOutUser());

  return <Navigate to={ROUTE.HOME} />;
};
