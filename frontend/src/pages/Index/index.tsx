import React from 'react';
import { Container, Content, Header, Main,
Containers, Contents, Headers, Form, SearchField
} from './styles';
import { Link } from "react-router-dom";
import DocumentTitle from 'react-document-title';
import useModal from "use-react-modal";
import Input from '../../components/Form/input';

const Home: React.FC =() => {

  const { isOpen, openModal, closeModal, Modal } = useModal();

  return (
  <>
  {isOpen && 
      
        <Containers>
          <Modal>
          <Contents>
              <Headers>
                <h1>Pontos de coleta</h1>
                <Link onClick={closeModal} to='#'>Fechar</Link>
              </Headers>
              <Form onSubmit={() => '/search'} action='/search'>
                <label htmlFor="search">Cidade</label>
                <SearchField>
                    <Input label=''name='search' placeholder='Pesquise por cidade'/>
                    <button>
                        <img src='../../assets/search.svg' alt='Buscar'/>
                    </button>
                </SearchField>
              </Form>
          </Contents>
          </Modal>
         
          </Containers>
     
}
    <DocumentTitle title = 'Ecoleta'/>
    <Container>
          <Content>
              <Header>
                <img src="../../assets/logo.svg" alt="Logomarca"></img>
                <Link to="/create-point">
                    <span></span>
                    Cadastre um ponto de coleta
                </Link>
              </Header>
              <Main>
                 <h1>Seu Marketplace de coleta de resíduos</h1>

                 <p>Ajudamos pessoas a encontraram pontos de coleta de forma eficiente.</p>

                 <Link onClick={openModal} to='/#'><span></span><strong>Pesquisar pontos de coleta</strong></Link>
              </Main>
          </Content>
      </Container>
    </>
  )
}

export default Home;