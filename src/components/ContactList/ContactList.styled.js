import styled from "@emotion/styled";

export const ContactRoster = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
`;

export const ContactItem = styled.li`
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const CntactBtn = styled.button`
  padding: 4px;
  background-color: hotpink;
  font-size: 16px;
  min-width: 140px;
  height: 40px;
  border: none;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: aquamarine;
    color: white;
  }
`;

export const ContactInfo = styled.p`
    font-size: 18px;
    font-weight: 500;
`;