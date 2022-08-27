import { StyledButton } from "./styles";

interface IProps {
  text: string;
}

export const FormButton = ({ text }: IProps) => {
  return <StyledButton type='submit'>{text}</StyledButton>;
};
