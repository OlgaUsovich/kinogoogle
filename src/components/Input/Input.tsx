import { StyledInput } from "./styles"

interface IProps {
    placeholder: string;
    type: string;
}

export const Input = ({placeholder, type}: IProps) => {
    return <StyledInput placeholder={placeholder} type={type} />
}