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

import { ImportButton } from "react-admin-import-csv";
import './styles.css';

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
      <ImportButton {...props} {...config}/>
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
