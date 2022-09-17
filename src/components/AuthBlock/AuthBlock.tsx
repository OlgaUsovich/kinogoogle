import { FiUser } from "react-icons/fi";
import * as styles from "./styles";
import { ROUTE } from "routers";
import { ArrowButtonIcon } from "assets";
import { useToggle } from "react-use";
import { useDetectClickOutside } from "react-detect-click-outside";
import { getUserInitials } from "utils";
import { useWindowSize } from "hooks";

interface IProps {
  name?: string | null;
}

export const AuthBlock = ({ name }: IProps) => {
  const [isOpen, setIsOpen] = useToggle(false);
  const ref: any = useDetectClickOutside({
    onTriggered: () => setIsOpen(false),
  });
  const { width = 0 } = useWindowSize();

  return width > 1280 ? (
    <styles.Container>
      <styles.UserName>
        <styles.Avatar>{name ? getUserInitials(name) : <FiUser />}</styles.Avatar>
        <styles.Text>{name ? name : "Sign In"}</styles.Text>
      </styles.UserName>
      <styles.UserButton ref={ref} onClick={setIsOpen} isOpen={isOpen}>
        <ArrowButtonIcon />
      </styles.UserButton>
      <styles.LinksList isOpen={isOpen}>
        <styles.LinkItem to={name ? ROUTE.SETTINGS : ROUTE.SIGN_IN}>
          {name ? "Edit profile" : "Sign In"}
        </styles.LinkItem>
        <styles.LinkItem to={name ? ROUTE.LOG_OUT : ROUTE.SIGN_UP}>
          {name ? "Log Out" : "Sign Up"}
        </styles.LinkItem>
      </styles.LinksList>
    </styles.Container>
  ) : null;
};
