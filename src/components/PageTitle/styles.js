import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10.74px;
  margin-bottom: 7.3rem;

  img {
    width: 43px;
    height: 43px;
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    background-color: transparent;
  }

  h1 {
    font-size: 3.7243rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
