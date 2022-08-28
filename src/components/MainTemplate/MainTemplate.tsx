import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Nav } from "../Nav";
import { MainWrapper, Wrapper } from "./styles";

export const MainTemplate = () => {
  return (
    <MainWrapper>
      <Header />
      <Wrapper>
        <Nav />
        <Outlet />
      </Wrapper>
    </MainWrapper>
  );
};
