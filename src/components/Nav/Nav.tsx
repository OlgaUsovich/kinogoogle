import { AiFillFire } from "react-icons/ai";
import { RiHome6Fill, RiSettings5Fill } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import { ROUTE } from "../../routers";
import * as styles from "./styles";
import { useWindowSize } from "../../hooks";

interface IProps {
  isNavOpen: boolean;
}

export const Nav = ({ isNavOpen }: IProps) => {
  const { width = 0 } = useWindowSize();

  const variants =
    width < 1280
      ? {
          open: { x: 0 },
          closed: { x: "100%" },
        }
      : {
          open: { x: 0 },
          closed: { x: 0 },
        };

  return (
    <styles.Nav
      initial="closed"
      animate={isNavOpen ? "open" : "closed"}
      variants={variants}
    >
      <styles.Ul>
        <styles.CustomLink to={ROUTE.HOME}>
          <RiHome6Fill />
          <styles.LinkText>Home</styles.LinkText>
        </styles.CustomLink>
        <styles.CustomLink to={ROUTE.TRENDS}>
          <AiFillFire /> <styles.LinkText>Trends</styles.LinkText>
        </styles.CustomLink>
        <styles.CustomLink to={ROUTE.FAVORITES}>
          <BsFillBookmarkFill /> <styles.LinkText>Favorites</styles.LinkText>
        </styles.CustomLink>
        <styles.CustomLink to={ROUTE.SETTINGS}>
          <RiSettings5Fill /> <styles.LinkText>Settings</styles.LinkText>
        </styles.CustomLink>
      </styles.Ul>
      <styles.Rigths>© All Rights Reserved</styles.Rigths>
    </styles.Nav>
  );
};
