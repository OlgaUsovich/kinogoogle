import { Spinner } from "../Spinner";
import { StyledButton } from "./styles";

interface IProps {
  text: string;
  isLoading: boolean;
}

export const FormButton = ({ text, isLoading }: IProps) => {
  return <StyledButton type='submit' disabled={isLoading}>{isLoading ? <Spinner /> : text}</StyledButton>;
};
