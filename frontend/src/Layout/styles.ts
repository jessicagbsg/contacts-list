import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
  background-color: #eee;
  width: 1000px;
  @media (max-width: 900px) {
    width: 600px;
  }
  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
`;

export const AddContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
`;
