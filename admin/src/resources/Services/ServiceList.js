import React from 'react';

import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EmailField,
  EditButton,
  TopToolbar,
  CreateButton,
  ExportButton,
} from 'react-admin';
import { dataProvider } from '../../providers/firebase-provider';
import { ImportButton } from "react-admin-import-csv";
import './styles.css';

// Must be react-admin 3.x
const dataProviderWrapped = {
  ...dataProvider,// = {dataProvider}, //...dataProvider, // <- Your data provider
  createMany: async (resource, params) => {
    const items = params.data;
  }
}

const config = {
  
  // A function to translate the CSV rows on import
  preCommitCallback: (csvRowItem) => {
    console.log(csvRowItem)
  }
}

const ListActions = (props) => {
  const { className, basePath } = props;
  return (
    <TopToolbar className={className}>
      <ImportButton {...props} {...config} {...dataProviderWrapped}/>
      <CreateButton {...props} />
      <ExportButton {...props} />
    </TopToolbar>
  );
};


export const ServiceList = props => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      className="service-list"
      actions={<ListActions />}
    >
      <Datagrid>
        <TextField source="titleService" />
        <TextField source="description" />
        <NumberField source="cost" />
        <NumberField source="duration" />

        <EditButton label="Detalhes" />
      </Datagrid>
    </List>
  );
};

export default ServiceList;
