import styled from "styled-components";

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #999;
  padding: 1rem;
  width: calc(100% - 2rem);
  background-color: #fefefe;
`;

export const ContactInfo = styled.div`
  h3 {
    font-size: 1.25rem;
    margin-bottom: 8px;
  }
  p {
    color: "#a6a6a6";
  }
`;

export const SideItems = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
