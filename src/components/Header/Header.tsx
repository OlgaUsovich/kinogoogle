import { Search } from "../Search";
import { AuthBlock } from "../AuthBlock";
import { HeaderWrapper, StyledDiv } from "./styles";
import { Logo } from "../../components";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <StyledDiv>
        <Search />
        <AuthBlock />
      </StyledDiv>
    </HeaderWrapper>
  );
};
