import { Search } from "../Search";
import { AuthBlock } from "../AuthBlock";
import { Container, Wrapper } from "./styles";
import { Logo } from "../../components";
import { getAuth } from "firebase/auth";

export const Header = () => {

  const auth = getAuth();
  const userName = auth.currentUser?.displayName

  return (
    <Wrapper>
      <Logo />
      <Container>
        <Search />
        <AuthBlock name={userName} />
      </Container>
    </Wrapper>
  );
};
