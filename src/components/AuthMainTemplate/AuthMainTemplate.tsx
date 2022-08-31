import { Outlet } from "react-router-dom";
import { AuthHeader, Container, Rigths, Wrapper } from "./styles";
import { Logo } from "../../components";

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
    </Wrapper>
  );
};
