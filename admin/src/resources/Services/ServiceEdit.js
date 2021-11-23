import React from 'react';
import {
    Edit,
    TabbedForm,
    FormTab,
    TextInput,
    NumberInput,
    SelectInput,
} from 'react-admin';
import { phoneParser } from '../utils';

const BarberEditTitle = ({ record }) => {
    return <span>{record ? `${record.name}` : ''}</span>;
};

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

const ServiceEdit = props => {
    return (
        <Edit {...props} title={<BarberEditTitle />} className="barber-list">
            <TabbedForm submitOnEnter={false}>
                <FormTab label="Perfil">
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
        </Edit>
    );
};

export default ServiceEdit;
