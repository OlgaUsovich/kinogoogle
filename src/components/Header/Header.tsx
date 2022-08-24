import { Search } from "../Search";
import { HeaderWrapper, Logo } from "./styles";

export const Header = () => {

    return (
      <HeaderWrapper>
        <Logo />
        <Search />
      </HeaderWrapper>
    );
  };