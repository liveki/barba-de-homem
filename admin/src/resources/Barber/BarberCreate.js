import React, { useState } from 'react';
import {
  Create,
  DateInput,
  TextInput,
  SelectInput,
  FormTab,
  TabbedForm,
  NumberInput,
} from 'react-admin';
import { phoneParser } from '../utils';

import './styles.css';

const BarberCreate = props => {
  const [address, setAddress] = useState({
    city: '',
    street: '',
    district: '',
    number: '',
    complement: '',
  });

  async function handleChangeCEP(cep) {
    if (cep.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
      response.json().then(data => {
        setAddress(
          {
            ...address,
            city: data.localidade,
            street: data.logradouro,
            district: data.bairro,
          },
        );
      });
    });
  }

  return (
    <Create {...props}>
      <TabbedForm redirect="list">
        <FormTab label="Perfil">
          <TextInput source="name" />
          <TextInput source="email" type="email" />

          <TextInput
            source="phone"
            parse={phoneParser}
            placeholder="(99) 99999-9999"
          />

          <DateInput source="birthday" />

          <SelectInput
            source="transport"
            choices={[
              { id: 'Carro', name: 'Carro' },
              { id: 'Moto', name: 'Moto' },
            ]}
          />
        </FormTab>
        <FormTab label="Endereço">
          <TextInput
            source="address.CEP"
            onChange={e => handleChangeCEP(e.target.value)}
          />
          <TextInput defaultValue={address.city} source={"address.city"} />
          <TextInput defaultValue={address.district} source={"address.district"} />
          <TextInput defaultValue={address.street} source={"address.street"} />
          <TextInput source="address.number" type="number" />
          <TextInput source="address.complement" />
        </FormTab>
        <FormTab label="Avaliação">
          <NumberInput source="rate.ratesAverage" initialValue="5.0" />
          <NumberInput source="rate.totalAppointments" initialValue="1" />
          <NumberInput source="rate.totalStars" initialValue="5" />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

export default BarberCreate;
