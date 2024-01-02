/* eslint-disable react/prop-types */

import { Container } from "./styles";

export function Button({ title = ``, onClick, ...props }) {
  return (
    <Container onClick={onClick} {...props}>
      {title}
    </Container>
  );
}
