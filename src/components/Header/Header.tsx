import { Search } from "../Search";
import { AuthBlock } from "../AuthBlock";
import { HeaderWrapper, Logo, StyledDiv } from "./styles";
import { ROUTE } from "../../routers";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to={ROUTE.HOME}><Logo /></Link>
      <StyledDiv>
        <Search />
        <AuthBlock />
      </StyledDiv>
    </HeaderWrapper>
  );
};
