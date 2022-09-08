import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useToggle } from "react-use";
import { Header } from "../Header";
import { Nav } from "../Nav";
import { Container, OutletContainer, Wrapper } from "./styles";

export const MainTemplate = () => {
  const [isNavOpen, setIsNavOpen] = useToggle(false);
  
  return (
    <Wrapper>
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Container>
        <Nav isNavOpen={isNavOpen} />
        <OutletContainer isNavOpen={isNavOpen}>
          <Outlet />
        </OutletContainer>
      </Container>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="dark"
      />
    </Wrapper>
  );
};
