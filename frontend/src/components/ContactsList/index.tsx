import { Contact as ContactCard } from "../Contact";
import { ContactsContainer } from "./styles";
import { IContactsList } from "./types";

export const ContactsList = ({ contacts }: IContactsList) => {
  return (
    <ContactsContainer>
      {contacts &&
        contacts.map((contact, index) => {
          return (
            <ContactCard
              key={index}
              id={contact?.id}
              fullName={contact?.full_name}
              phoneNumber={contact?.phone}
              firstName={contact?.first_name}
              lastName={contact?.last_name}
            />
          );
        })}
    </ContactsContainer>
  );
};
