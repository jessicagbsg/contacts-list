import { useState } from "react";
import { Button } from "../Button";
import { ContactInfo, ContactContent, SideItems } from "./styles";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { ContactModal } from "../Modal";
import { EditContact } from "../EditContact";
import { IContact } from "./types";
import { deleteContact } from "../../api";

export const Contact = ({
  firstName,
  lastName,
  fullName,
  phoneNumber,
  id,
}: IContact) => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const openEditContactModal = () => {
    setEditModalOpen(true);
  };

  const handleDeleteContact = async () => {
    try {
      if (!id) return;
      await deleteContact(id);
    } catch (error) {}
  };
  return (
    <>
      <ContactContent>
        <ContactInfo>
          <h3>{fullName}</h3>
          <SideItems>
            <HiPhone color="#a6a6a6" />
            <p>{phoneNumber}</p>
          </SideItems>
        </ContactInfo>

        <SideItems>
          <Button color="#eee" onClick={openEditContactModal}>
            <FaEdit color="#333" />
          </Button>
          <Button color="#cb444a" onClick={handleDeleteContact}>
            <FaTrashAlt />
          </Button>
        </SideItems>
      </ContactContent>
      {editModalOpen && (
        <ContactModal
          isOpen={editModalOpen}
          modalLabel="edit"
          setIsOpen={setEditModalOpen}
        >
          <h2 style={{ marginBottom: "2rem" }}>Edit Contact</h2>
          <EditContact
            firstName={firstName}
            lastName={lastName}
            phoneNumber={phoneNumber}
            id={id}
            setEditModalOpen={setEditModalOpen}
          />
        </ContactModal>
      )}
    </>
  );
};
