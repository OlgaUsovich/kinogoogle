import { StyledImg } from "./styles";

interface IProps {
    img: string;
}

export const Poster = ({ img }: IProps) => {
    return <StyledImg src={img} />
}