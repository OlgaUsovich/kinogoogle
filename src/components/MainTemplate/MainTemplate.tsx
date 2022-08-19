import { Outlet } from "react-router-dom";
import { Nav } from "../Nav";
import { Wrapper } from "./styles";

export const MainTemplate = () => {
  return (
    <Wrapper>
      <Nav />
      <Outlet />;
    </Wrapper>
  );
};
