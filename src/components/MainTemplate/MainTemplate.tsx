import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Nav } from "../Nav";
import { Wrapper } from "./styles";

export const MainTemplate = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Nav />
        <Outlet />
      </Wrapper>
    </>
  );
};
