import styled from "styled-components";

export const Container = styled.main`
  width: 42.8rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 15.8rem auto;
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;

  label {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    font-weight: 400;

    input {
      height: 4.8rem;
      padding: 1.2rem 1.4rem;
      border: none;
      border-radius: 8px;
      outline: none;
      font-weight: 400;
      line-height: 100%;
      width: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
    }
  }

  a {
    text-decoration: none;
    text-align: center;
    font-family: Poppins, sans-serif;
    font-weight: 500;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
