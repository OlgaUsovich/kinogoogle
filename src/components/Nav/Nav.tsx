import { AiFillFire } from "react-icons/ai";
import { RiHome6Fill, RiSettings5Fill } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import { ROUTE } from "../../routers";
import { CustomLink, LinkText, Rigths, StyledNav, StyledUl } from "./styles";

interface IProps {
  isNavOpen: boolean;
}

export const Nav = ({isNavOpen}: IProps) => {
  return (
    <StyledNav isNavOpen={isNavOpen}>
      <StyledUl>
        <CustomLink to={ROUTE.HOME}>
          <RiHome6Fill />
          <LinkText>Home</LinkText>
        </CustomLink>
        <CustomLink to={ROUTE.TRENDS}>
          <AiFillFire /> <LinkText>Trends</LinkText>
        </CustomLink>
        <CustomLink to={ROUTE.FAVORITES}>
          <BsFillBookmarkFill /> <LinkText>Favorites</LinkText>
        </CustomLink>
        <CustomLink to={ROUTE.SETTINGS}>
          <RiSettings5Fill /> <LinkText>Settings</LinkText>
        </CustomLink>
      </StyledUl>
      <Rigths>© All Rights Reserved</Rigths>
    </StyledNav>
  );
};
