/* eslint-disable react/prop-types */
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { styled } from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [showModal, setShowModal] = useState("");
  const open = setShowModal;
  const close = () => setShowModal("");

  return (
    <ModalContext.Provider value={{ showModal, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function OpenButton({ children, value }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: (e) => {
      open(value);
      e.stopPropagation();
    },
  });
}

function Content({ children, value }) {
  const { showModal, close } = useContext(ModalContext);
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    }
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  });
  if (showModal !== value) return null;

  return (
    <StyledOverlay>
      <StyledModal ref={ref}>
        {cloneElement(children, { onCloseModal: () => close() })}
      </StyledModal>
    </StyledOverlay>
  );
}

Modal.OpenButton = OpenButton;
Modal.Content = Content;
export default Modal;
