import { ROUTE } from "../../routers";
import { Portal, PortalTarget } from "../Portal";
import { ModalBody, ModalButton, ModalContent, ModalHeader, ModalText, ModalTitle, StyledSpan } from "./styles";

interface ModalProps {
    isOpen: boolean;
    handleModal: () => void;
}

export const Modal = ({isOpen, handleModal}: ModalProps) => {
  return isOpen ? (
    <Portal target={PortalTarget.MODAL}>
      <div
        className="modal d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onClick={handleModal}
      >
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Successful registration</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <ModalText>YOU'VE JUST SUCCESSFULLY REGISTERED! <StyledSpan>WELCOME TO KINOGOOGLE!</StyledSpan></ModalText>
          </ModalBody>
            <ModalButton to={ROUTE.HOME} className="btn btn-primary">
              Explore
            </ModalButton>
        </ModalContent>
      </div>
    </Portal>
  ) : null;
};
