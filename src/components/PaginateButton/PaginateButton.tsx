import { Button, Spinner } from "./styles";

interface IProps {
  onClick: () => void;
  disabled: boolean;
}

export const PaginateButton = ({ onClick, disabled }: IProps) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      Show more<Spinner></Spinner>
    </Button>
  );
};
