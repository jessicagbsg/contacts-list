import styled from "styled-components";

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Text = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;
  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;
