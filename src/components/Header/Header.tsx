import { Search } from "../Search";
import { AuthBlock } from "../AuthBlock";
import { HeaderWrapper, StyledDiv } from "./styles";
import { Logo } from "../../components";
import { getAuth } from "firebase/auth";

export const Header = () => {

  const auth = getAuth();
  const userName = auth.currentUser?.displayName

  return (
    <HeaderWrapper>
      <Logo />
      <StyledDiv>
        <Search />
        <AuthBlock name={userName} />
      </StyledDiv>
    </HeaderWrapper>
  );
};
