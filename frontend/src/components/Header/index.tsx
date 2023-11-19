import React from "react";
import { FaAddressBook } from "react-icons/fa";
import { HeaderContent, Text } from "./styles";

export const Header = () => {
  return (
    <HeaderContent>
      <FaAddressBook size={40} />
      <Text>Phone Book App</Text>
    </HeaderContent>
  );
};
