import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { PageTitle } from "../../components/PageTitle";
import { useAuth } from "../../hooks/auth";
import { Container, Content } from "./styles";

export function SignIn() {
  const navigate = useNavigate();

  const { signIn } = useAuth();

  const [password, setPassword] = useState(``);
  const [email, setEmail] = useState(``);

  const handleClickLogin = async (event) => {
    event.preventDefault();

    signIn({
      password,
      email,
    }).then(() => {
      alert(`Usuário logado com sucesso.`);
      console.log("second");
      return navigate(`/`);
    });
  };

  return (
    <Container>
      <PageTitle />

      <Content>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            id="password"
            type="password"
            placeholder="Exemplo: Maria da Silva"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <Button title={`Entrar`} type={`submit`} onClick={handleClickLogin} />

        <a href="/signin">Criar uma conta</a>
      </Content>
    </Container>
  );
}
