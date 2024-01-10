import styled from "styled-components";
import Button from "../Button";
import { useEffect, useRef } from "react";

const Modal = ({
  isOpen,
  setIsOpen,
  buttonTxt,
  isSecond,
  setIsSecond,
  btnFunc,
  children,
}) => {
  return (
    <ModalOverlay onClick={() => setIsOpen(!isOpen)}>
      <ModalContent>
        <ContentBox onClick={(e) => e.stopPropagation()}>{children}</ContentBox>
        <ButtonBox
          onClick={() => {
            if (setIsSecond) {
              setIsSecond(!isSecond);
              setIsOpen(!isOpen);
            }
            if (btnFunc) {
              console.log("등록");
            }
          }}
        >
          <Button text={buttonTxt}></Button>
        </ButtonBox>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContentBox = styled.div``;

const ButtonBox = styled.div``;

export default Modal;
