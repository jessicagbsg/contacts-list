import { AddContactContainer, Container } from "./styles";
import { Header } from "../components/Header";
import { GrFormAdd } from "react-icons/gr";
import { Button } from "../components/Button";
import { Search } from "../components/Search";
import { ContactsList } from "../components/ContactsList";
import { ContactModal } from "../components/Modal";
import { useCallback, useEffect, useState } from "react";
import { CreateContact } from "../components/CreateContact";
import { listContacts } from "../api";
import { Contact, ContactFilters } from "../types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Layout = () => {
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);
  const [filtered, setfiltered] = useState<boolean>(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string | undefined>();

  const getContacts = useCallback(async () => {
    setError(undefined);
    setfiltered(false);
    try {
      const response = await listContacts();
      setContacts(response);
    } catch (err) {
      toast("No contacts found", { type: "error" });
    }
  }, []);

  const getContactsWithFilter = useCallback(async (filter: ContactFilters) => {
    setError(undefined);
    setfiltered(filtered);
    const response = await listContacts(filter);
    setContacts(response);
    if (response.length === 0) toast("No contacts found", { type: "error" });
  }, []);

  useEffect(() => {
    getContacts();
  }, [filtered]);

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
        <Search onInputChange={getContactsWithFilter} />
        <ContactsList contacts={contacts} />
        {error && <p>{error}</p>}
      </Container>
      {createModalOpen && (
        <ContactModal
          isOpen={createModalOpen}
          modalLabel="create"
          setIsOpen={setCreateModalOpen}
        >
          <h2 style={{ marginBottom: "2rem" }}>Create Contact</h2>
          <CreateContact setCreateModalOpen={setCreateModalOpen} />
        </ContactModal>
      )}
      <ToastContainer />
    </>
  );
};
