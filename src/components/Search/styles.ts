import styled from "styled-components";
import { COLOR, H2, MEDIA, SUBLINE13 } from "../../ui";

export const SearchWrapper = styled.div`
  grid-area: search;
  position: relative;
  flex-grow: 1;
`;

export const FilterButton = styled.button`
  position: absolute;
  right: 21px;
  top: 16px;
  border: 0;
  font-size: 24px;
  line-height: 1;
  color: ${COLOR.LIGHT};
  background-color: transparent;
  cursor: pointer;

  > * {
    display: block;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 2;
`;

export const FilterForm = styled.form`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 15%;
  height: 100%;
  width: 518px;
  padding: 48px 40px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: ${COLOR.DARK};

  ${MEDIA.SM} {
    width: 100%;
    padding: 32px 24px;
    border-radius: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  ${H2};
  color: ${COLOR.WHITE};
`;

export const Button = styled.button`
  border: 0;
  background-color: transparent;
  color: ${COLOR.LIGHT};

  & > * {
    width: 24px;
    height: 24px;
  }

  &:hover {
    color: ${COLOR.PRIMARY_DIMMER};
  }
`;

export const SelectLabel = styled.label`
  padding-bottom: 32px;
  border-bottom: 1px solid ${COLOR.GRAPHITE};
  ${SUBLINE13};
  color: ${COLOR.WHITE};
`;

export const LabelText = styled.span`
  display: inline-block;
  padding-bottom: 8px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ButtonsBlock = styled.div`
  display: flex;
  gap: 40px;

  ${MEDIA.LG} {
    width: 100%;
  }

  ${MEDIA.XS} {
    flex-direction: column;
    gap: 16px;
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  height: 56px;
  border: 0;
  border-radius: 10px;
  ${SUBLINE13};
  line-height: 56px;
  text-align: center;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.GRAPHITE};
  cursor: pointer;

  &:hover {
    color: ${COLOR.LIGHT};
  }

  &:disabled {
    color: ${COLOR.LIGHT};
    background-color: ${COLOR.SECONDARY};
    cursor: wait;
  }
`;
