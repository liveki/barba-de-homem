import React from 'react';
import {
    Create,
    DateInput,
    TextInput,
    NumberInput,
    FormTab,
    TabbedForm,
    SelectInput
} from 'react-admin';

import './styles.css';

const statusOptions = [
  {
      id: 'ATIVO',
      name: "Ativo",
  },
  {
      id: 'INATIVO',
      name: "Inativo",
  },
]

const ServiceCreate = props => {
    return (
        <Create {...props}>
            <TabbedForm redirect="list">
                <FormTab label="Novo Serviço">
                    <TextInput source="titleService" />
                    <TextInput source="description" />
                    <NumberInput source="cost" />
                    <NumberInput source="duration" />
                    <SelectInput source="status" 
                        choices={statusOptions}
                        initialValue={statusOptions[0].id}
                    />
                </FormTab>

            </TabbedForm>
        </Create>
    );
};

export default ServiceCreate;
