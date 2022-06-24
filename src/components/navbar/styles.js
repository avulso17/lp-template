import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;

  background: rgba(255, 255, 255, 0.1);
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: fit-content;
`;

export const Button = styled.button`
  background: unset;
  border: none;
  padding: 6px 0;

  transition: all 200ms ease;
  :hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
