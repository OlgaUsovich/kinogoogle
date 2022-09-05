import { useDetectClickOutside } from "react-detect-click-outside";
import { Button, Line } from "./styles";

interface IProps {
  isNavOpen: boolean;
  setIsNavOpen: (nextValue?: any) => void;
}

export const BurgerButton = ({ isNavOpen, setIsNavOpen }: IProps) => {
  const ref: any = useDetectClickOutside({
    onTriggered: () => setIsNavOpen(false),
  });

  return (
    <Button ref={ref} onClick={setIsNavOpen}>
      <Line isOpen={isNavOpen} />
      <Line isOpen={isNavOpen} />
      <Line isOpen={isNavOpen} />
    </Button>
  );
};
