import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  min-width: 400px;
  display: grid;
  gap: 0.5rem;
`;

export const FormInput = styled.input`
  width: calc(100% - 20px);
  min-height: 20px;
  border-radius: 5px;
  border: 0.5px solid #999;
  padding: 8px;
`;
