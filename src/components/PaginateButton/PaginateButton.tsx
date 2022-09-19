import { Button, Spinner } from "./styles";

interface IProps {
  onClick: () => void;
  isLoading: boolean;
}

export const PaginateButton = ({ onClick, isLoading }: IProps) => {
  return (
    <Button onClick={onClick}>
      Show more<Spinner isLoading={isLoading}></Spinner>
    </Button>
  );
};
