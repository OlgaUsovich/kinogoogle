import { ROUTE } from "../../routers";
import { Portal, PortalTarget } from "../Portal";
import { Body, Container, Header, Title, Text, PurpleText, Button, Content } from "./styles";

interface ModalProps {
  isOpen: boolean;
  handleModal: () => void;
}

export const Modal = ({ isOpen, handleModal }: ModalProps) => {
  return isOpen ? (
    <Portal target={PortalTarget.MODAL}>
      <Container onClick={handleModal}>
        <Content>
          <Header>
            <Title>Successful registration</Title>
          </Header>
          <Body>
            <Text>
              YOU'VE JUST SUCCESSFULLY REGISTERED! <PurpleText>WELCOME TO KINOGOOGLE!</PurpleText>
            </Text>
          </Body>
          <Button to={ROUTE.HOME} className="btn btn-primary">
            Explore
          </Button>
        </Content>
      </Container>
    </Portal>
  ) : null;
};
