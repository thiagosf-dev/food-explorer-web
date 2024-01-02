import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { PageTitle } from "../../components/PageTitle";
import { api } from "../../services/api";
import { Container, Content } from "./styles";

export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState();

  const handleClickCreateAccount = (event) => {
    event.preventDefault();

    const payload = {
      name,
      email,
      password,
    };

    api
      .post(`/user`, payload)
      .then(() => {
        alert(`Usuário cadastrado com sucesso.`);
        navigate(`/`);
      })
      .catch((error) => {
        console.error(error);
        alert(`ERROR: ${error.response.data.message}`);
      });
  };

  return (
    <Container>
      <PageTitle />

      <Content>
        <label htmlFor="name">
          Seu nome
          <input
            id="name"
            type="text"
            placeholder="Exemplo: Maria da Silva"
            onChange={(e) => setName(e.target.value)}
          />
        </label>

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
            placeholder="No mínimo 6 caracteres"
            min={6}
            minLength={6}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <Button
          title={`Criar conta`}
          type={`submit`}
          onClick={handleClickCreateAccount}
          l
        />

        <a href="/signin">Já tenho uma conta</a>
      </Content>
    </Container>
  );
}
