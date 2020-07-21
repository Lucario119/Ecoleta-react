import React from "react";
import DocumentTitle from "react-document-title";
import { Body, Container, Header, Main, Cards, Card } from "./styles";

const SearchResults: React.FC = () => {
  return (
    <>
      <DocumentTitle title="Resultado da pesquisa" />
      <Body>
        <Container>
          <Header />
          <Main>
            <h4>
              <strong> 0 pontos</strong>
              encontrados
            </h4>

            <Cards>
              <Card>
                <img src="{{place.image}}" alt="{{place.name}}" />
                <h1>Nome</h1>
                <h3>Items</h3>
                <p>
                  Cidade, Estado
                  Endereço
                  E-mail
                </p>
              </Card>
            </Cards>
            <h4>
              <strong>Nenhum</strong>
              local encontrado
            </h4>
          </Main>
        </Container>
      </Body>
    </>
  );
};

export default SearchResults;
