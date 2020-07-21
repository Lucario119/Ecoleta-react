import DocumentTitle from 'react-document-title'
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { Container, Fieldset, FieldGroup, Field, ItemsGrid, Form } from "./styles";
import Headers from "../../components/Header/";
import axios from "axios";
// import { Form } from "@unform/web";
import Input from "../../components/Form/input";
import API from "../../services/api";

const CreatePoint: React.FC = () => {
  interface Item {
    id: number;
    title: string;
    image_url: string;
  }

  interface IBGEUFResponse {
    sigla: string;
  }

  interface IBGECityResponse {
    nome: string;
  }

  const history = useHistory();

  const [items, setItems] = useState<Item[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    address: "",
  });

  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");

  useEffect(() => {
    API.get("items").then((response) => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    async function fetchDataUf() {
      const response = await axios.get<IBGEUFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );

      const ufInitials = response.data.map((uf) => uf.sigla);

      setUfs(ufInitials);
    }

    fetchDataUf();
  }, []);

  useEffect(() => {
    //carregar as cidades sempre que a UF mudar
    if (selectedUf === "0") {
      return;
    }

    async function fetchDataCity() {
      const response = await axios.get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      );

      const cityNames = response.data.map((city) => city.nome);

      setCities(cityNames);
    }
    fetchDataCity();
  }, [selectedUf]);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

   async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { name, email, image, address } = formData;
    const uf = selectedUf;
    const city = selectedCity;
    const items = selectedItems;

    const data = new FormData();

    data.append("name", name);
    data.append("email", email);
    data.append("image", image);
    data.append("address", address);
    data.append("uf", uf);
    data.append("city", city);
    data.append("items", items.join(","));

    await API.post("points", data);

    history.push("/");
  }

  return (
   <>
    <DocumentTitle title = "Criar ponto de coleta"/>
    <Container>
      <Headers />

      <Form onSubmit={handleSubmit}>
        <h1>Cadastro do ponto de coleta</h1>

        <Fieldset>
          <legend>
            <h2>Dados da entidade</h2>
          </legend>

          <FieldGroup>
            <Field>
              <Input
                name="name"
                label="Nome da entidade"
                onChange={handleInputChange}
              ></Input>
            </Field>
            <Field>
              <Input
                type="url"
                name="image"
                placeholder="http://"
                label="Imagem da entidade"
                onChange={handleInputChange}
              />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <Input name="address" label="Endereço" />
            </Field>
            <Field>
              <Input
                type="email"
                name="email"
                label="E-mail"
                onChange={handleInputChange}
              />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <label>Estados</label>
              <select
                name="uf"
                id="uf"
                value={selectedUf}
                onChange={handleSelectUf}
              >
                <option value="">Selecione o Estado</option>
                {ufs.map((uf) => (
                  <option key={uf} value={uf}>
                    {" "}
                    {uf}
                  </option>
                ))}
              </select>
             
            </Field>
            <Field>
              <label>Cidade</label>
              <select
                name="city"
                id="city"
                value={selectedCity}
                onChange={handleSelectCity}
              >
                <option value="">Selecione a Cidade</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </Field>
          </FieldGroup>

          <legend>
            <h2>Itens de coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>

          <ItemsGrid >
            {items.map((item) => ( 
                <li
                key={item.id}
                onClick={() => handleSelectItem(item.id)}
                className={selectedItems.includes(item.id) ? "selected" : ""}
              >
                <img src={item.image_url} alt={item.title} />
                <span>{item.title}</span>
              </li>
             ))}

            {/* {items.map((item) => (
              <li
                key={item.id}
                onClick={() => handleSelectItem(item.id)}
                className={selectedItems.includes(item.id) ? "selected" : ""}
              >
                <img src="../../assets/baterias.svg" alt="Pilhas e Baterias" />
                <span>Pilhas e Baterias</span>
              </li>
            ))} */}
          </ItemsGrid>
          <Input type="hidden" name="items" label="" />
        </Fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
      </Form>
    </Container>
  </>
  );
};
export default CreatePoint;