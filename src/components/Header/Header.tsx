import { Search } from "../Search";
import { AuthBlock } from "../AuthBlock";
import { Wrapper } from "./styles";
import { Logo, Spinner } from "../../components";
import { getAuth } from "firebase/auth";
import { useAuth } from "../../hooks/useAuth";
import { BurgerButton } from "../BurgerButton";

interface IProps {
  isNavOpen: boolean;
  setIsNavOpen: (nextValue: boolean) => void;
}

export const Header = ({isNavOpen, setIsNavOpen}: IProps) => {

  const [loading] = useAuth();
  
  if (!loading) {
    const auth = getAuth();
    const userName = auth.currentUser?.displayName
    
    return (
      <Wrapper>
        <Logo />
        <Search />
        <AuthBlock name={userName} />
        <BurgerButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </Wrapper>
    );
  }

  return <Spinner />
};
