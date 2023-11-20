import Modal from "react-modal";
import { IContactModal } from "./types";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.35)",
  },
};

export const ContactModal = ({
  children,
  modalLabel,
  isOpen,
  setIsOpen,
}: IContactModal) => {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel={modalLabel}
    >
      {children}
    </Modal>
  );
};
