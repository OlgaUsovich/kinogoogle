import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useToggle } from "react-use";
import { Header, Nav } from "components";
import { Container, OutletContainer, Wrapper } from "./styles";

export const MainTemplate = () => {
  const [isNavOpen, setIsNavOpen] = useToggle(false);

  return (
    <Wrapper>
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Container>
        <Nav isNavOpen={isNavOpen} />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Container>
      <ToastContainer position="bottom-right" autoClose={1000} theme="dark" />
    </Wrapper>
  );
};
