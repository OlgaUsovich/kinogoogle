import { Search } from "../Search";
import { AuthBlock } from "../AuthBlock";
import { Wrapper } from "./styles";
import { Logo } from "../../components";
import { BurgerButton } from "../BurgerButton";
import { useAppSelector } from "../../store/hooks";

interface IProps {
  isNavOpen: boolean;
  setIsNavOpen: (nextValue: boolean) => void;
}

export const Header = ({ isNavOpen, setIsNavOpen }: IProps) => {
  const user = useAppSelector((state) => state.users.result);

  return (
    <Wrapper>
      <Logo />
      <Search />
      <AuthBlock name={user?.displayName} />
      <BurgerButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </Wrapper>
  );
};
