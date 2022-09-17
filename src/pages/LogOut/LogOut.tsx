import { Spinner } from "components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routers";
import { logOutUser, useAppDispatch } from "store";

export const LogOut = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logOutUser())
      .then(() => {
        navigate(ROUTE.HOME, { replace: true });
      });
  }, [dispatch, navigate]);

  return <Spinner />;
};
