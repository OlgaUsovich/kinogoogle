import { Search } from "../Search";
import { AuthBlock } from "../AuthBlock";
import { Container, Wrapper } from "./styles";
import { Logo, Spinner } from "../../components";
import { getAuth } from "firebase/auth";
import { useAuth } from "../../hooks/useAuth";

export const Header = () => {

  const [loading, isUser] = useAuth();
  
  if (!loading) {
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
  }

  return <Spinner />
};
