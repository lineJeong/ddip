import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const ModalContents = styled.div`
  background: white;
  text-align: center;
  padding: 20px;
  z-index: 20;
  border-radius: 5px;
  min-width: 20rem;
`;

function Modal({ isOpen, children, onClose }) {
  if (!isOpen) return null;

  const handleClickBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <ModalBackdrop onClick={handleClickBackdrop}>
      <ModalContents>{children}</ModalContents>
    </ModalBackdrop>,
    document.body
  );
}

export default Modal;
