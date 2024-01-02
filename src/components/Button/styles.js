import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  height: 4.8rem;
  border: none;
  border-radius: .5rem;
  padding: 1.2rem 3.2rem;
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
