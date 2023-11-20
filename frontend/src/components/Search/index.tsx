import { useState } from "react";
import { ContactFilters } from "../../types";
import { SearchContainer, SearchInput } from "./styles";
import { CgSearch } from "react-icons/cg";

interface Props {
  onInputChange: (filters: ContactFilters) => void;
}

export const Search = ({ onInputChange }: Props) => {
  const [inputValue, setInputValue] = useState<ContactFilters | undefined>();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterKey: keyof ContactFilters
  ) => {
    const value = e.target.value;
    setInputValue((prevInputValues) => ({
      ...prevInputValues,
      [filterKey]: value,
    }));

    const updatedFilters: ContactFilters = {
      ...inputValue,
      [filterKey]: value,
    };
    onInputChange(updatedFilters);
  };

  return (
    <SearchContainer>
      <CgSearch />
      <SearchInput
        type="text"
        placeholder="Search for contact by last name..."
        onChange={(e) => handleInputChange(e, "last_name")}
      />
    </SearchContainer>
  );
};
