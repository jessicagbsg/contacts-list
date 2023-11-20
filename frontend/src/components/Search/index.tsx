import { SearchContainer, SearchInput } from "./styles";
import { CgSearch } from "react-icons/cg";

export const Search = () => {
  const handleInputChange = () => {};
  return (
    <SearchContainer>
      <CgSearch />
      <SearchInput
        type="text"
        placeholder="Search for contact by last name..."
        onChange={handleInputChange}
      />
    </SearchContainer>
  );
};
