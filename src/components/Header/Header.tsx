import { Search } from "../Search";
import { AuthBlock } from "../AuthBlock";
import { HeaderWrapper, Logo, StyledDiv } from "./styles";

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
