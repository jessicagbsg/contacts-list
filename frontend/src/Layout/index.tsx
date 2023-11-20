import { AddContactContainer, Container } from "./styles";
import { Header } from "../components/Header";
import { GrFormAdd } from "react-icons/gr";
import { Button } from "../components/Button";
import { Search } from "../components/Search";
import { ContactsList } from "../components/ContactsList";
import { ContactModal } from "../components/Modal";
import { useState } from "react";
import { CreateContact } from "../components/CreateContact";

export const Layout = () => {
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);

  const openAddContactModal = () => {
    setCreateModalOpen(true);
  };

  return (
    <>
      <Container>
        <Header />
        <AddContactContainer>
          <h2>Contacts</h2>
          <Button color="#347af6" onClick={openAddContactModal}>
            <GrFormAdd />
            Add Contact
          </Button>
        </AddContactContainer>
        <Search />
        <ContactsList />
      </Container>
      {createModalOpen && (
        <ContactModal
          isOpen={createModalOpen}
          modalLabel="create"
          setIsOpen={setCreateModalOpen}
        >
          <h2 style={{ marginBottom: "2rem" }}>Create Contact</h2>
          <CreateContact />
        </ContactModal>
      )}
    </>
  );
};
