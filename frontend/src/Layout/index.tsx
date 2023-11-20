import { AddContactContainer, Container } from "./styles";
import { Header } from "../components/Header";
import { GrFormAdd } from "react-icons/gr";
import { Button } from "../components/Button";
import { Search } from "../components/Search";
// import { ContactsList } from "../components/ContactsList";

export const Layout = () => {
  const handleAddContact = () => {};

  return (
    <Container>
      <Header />
      <AddContactContainer>
        <h2>Contacts</h2>
        <Button color="#347af6" onClick={handleAddContact}>
          <GrFormAdd />
          Add Contact
        </Button>
      </AddContactContainer>
      <Search />
      {/* <ContactsList /> */}
    </Container>
  );
};
