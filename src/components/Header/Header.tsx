import { Search, AuthBlock, Logo, BurgerButton } from "components";
import { Wrapper } from "./styles";
import { useAppSelector, getUserInfoSelector } from "store";
import { useWindowSize } from "hooks";

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
      {width <= 1280 && (
        <BurgerButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      )}
    </Wrapper>
  );
};
