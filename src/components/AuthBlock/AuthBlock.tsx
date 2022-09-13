import { FiUser } from "react-icons/fi";
import {
  Avatar,
  LinkItem,
  LinksList,
  StyledDiv,
  Text,
  UserButton,
  UserName,
} from "./styles";
import { ROUTE } from "../../routers";
import { ArrowButtonIcon } from "../../assets";
import { useToggle } from "react-use";
import { useDetectClickOutside } from "react-detect-click-outside";
import { getUserInitials } from "../../utils";

interface IProps {
  name?: string | null;
}

export const AuthBlock = ({ name }: IProps) => {
  const [isOpen, setIsOpen] = useToggle(false);
  const ref: any = useDetectClickOutside({
    onTriggered: () => setIsOpen(false),
  });

  return (
    <StyledDiv>
      <UserName>
        <Avatar>{name ? getUserInitials(name) : <FiUser />}</Avatar>
        <Text>{name ? name : "Sign In"}</Text>
      </UserName>
      <UserButton ref={ref} onClick={setIsOpen} isOpen={isOpen}>
        <ArrowButtonIcon />
      </UserButton>
      <LinksList isOpen={isOpen}>
        <LinkItem to={name ? ROUTE.SETTINGS : ROUTE.SIGN_IN}>
          {name ? "Edit profile" : "Sign In"}
        </LinkItem>
        <LinkItem to={name ? ROUTE.LOG_OUT : ROUTE.SIGN_UP}>
          {name ? "Log Out" : "Sign Up"}
        </LinkItem>
      </LinksList>
    </StyledDiv>
  );
};
