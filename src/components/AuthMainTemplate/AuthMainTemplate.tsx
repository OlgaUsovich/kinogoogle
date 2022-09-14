import { Outlet } from "react-router-dom";
import { AuthHeader, Container, Rigths, Wrapper } from "./styles";
import { Logo } from "../../components";
import { ToastContainer } from "react-toastify";

export const AuthMainTemplate = () => {
  return (
    <Wrapper>
      <AuthHeader>
        <Logo />
      </AuthHeader>
      <Container>
        <Outlet />
      </Container>
      <Rigths>© All Rights Reserved</Rigths>
      <ToastContainer position="bottom-right" autoClose={2000} theme="dark" />
    </Wrapper>
  );
};
