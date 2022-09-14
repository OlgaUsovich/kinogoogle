import { Search } from "../Search";
import { AuthBlock } from "../AuthBlock";
import { Wrapper } from "./styles";
import { Logo } from "../../components";
import { BurgerButton } from "../BurgerButton";
import { useAppSelector } from "../../store/hooks";
import { useWindowSize } from "../../hooks";
import { getUserInfoSelector } from "store";

interface IProps {
  isNavOpen: boolean;
  setIsNavOpen: (nextValue: boolean) => void;
}

export const Header = ({ isNavOpen, setIsNavOpen }: IProps) => {
  const user = useAppSelector(getUserInfoSelector);
  const { width = 0 } = useWindowSize();

  return (
    <Wrapper>
      <Logo />
      <Search />
      <AuthBlock name={user?.displayName} />
      {width < 1280 && (
        <BurgerButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      )}
    </Wrapper>
  );
};
