import { Button, Spinner } from "./styles"

interface IProps {
    onClick: () => void;
}


export const PaginateButton = ({ onClick }: IProps) => {
    return <Button onClick={onClick}>Show more<Spinner></Spinner></Button>
}
