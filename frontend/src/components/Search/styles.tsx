import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding-left: 10px;
  width: calc(100% - 10px);
  border-radius: 5px;
  border: 1px solid #999;
`;

export const SearchInput = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  border-radius: 5px;
  border: none;
  &:focus {
    outline: none;
  }
`;
