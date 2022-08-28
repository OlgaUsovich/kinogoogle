import { FiUser } from "react-icons/fi";
import { getUserInitials } from "../../helpers";
import { Avatar, LinkItem, LinksList, StyledDiv, Text, UserButton, UserName } from "./styles";
import { useToggle } from "../../hooks";
import { ROUTE } from "../../routers";
import { ArrowButton } from "../../assets";

interface IProps {
  name?: string;
  surname?: string;
}

export const AuthBlock = ({ name, surname }: IProps) => {
  const [isOpen, setIsOpen] = useToggle();

  return (
    <StyledDiv>
      <UserName>
        <Avatar>
          {name && surname ? getUserInitials(name, surname) : <FiUser />}
        </Avatar>
        <Text>{name && surname ? `${name} ${surname}` : "Sign In"}</Text>
      </UserName>
      <UserButton onClick={setIsOpen} isOpen={isOpen}>
        <ArrowButton />
      </UserButton>
      <LinksList isOpen={isOpen}>
        <LinkItem to={ROUTE.SIGN_IN}>{name && surname ? "Edit profile" : "Sign In"}</LinkItem>
        <LinkItem to={ROUTE.SIGN_UP}>{name && surname ? "Log Out" : "Sign Up"}</LinkItem>
      </LinksList>
    </StyledDiv>
  );
};
