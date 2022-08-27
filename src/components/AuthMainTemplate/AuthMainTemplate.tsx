import { Outlet } from "react-router-dom";
import { Rigths, Wrapper } from "./styles";

export const AuthMainTemplate = () => {
    return (
        <Wrapper>
          <Outlet />
          <Rigths>© All Rights Reserved</Rigths>
        </Wrapper>
    );
  };