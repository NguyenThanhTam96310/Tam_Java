import { List, Datagrid, TextField, DeleteButton, EditButton, Create, Edit, SimpleForm, TextInput } from "react-admin";

export const AddressList = () => (
    <List>
        <Datagrid>
            <TextField source="addressId" label="Address Id" />
            <TextField source="street" label="Street" />
            <TextField source="buildingName" label="Building Name" />
            <TextField source="city" label="City" />
            <TextField source="state" label="State" />
            <TextField source="country" label="Country" />
            <TextField source="pincode" label="Pincode" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const AddressCreate = () => (
    <Create >
        <SimpleForm>
            <TextInput source="street" label="Street" />
            <TextInput source="buildingName" label="Building Name" />
            <TextInput source="city" label="City" />
            <TextInput source="state" label="State" />
            <TextInput source="country" label="Country" />
            <TextInput source="pincode" label="Pincode" />
        </SimpleForm>
    </Create>
);

export const AddressEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="addressId" label="Address Id" disabled />
            <TextInput source="street" label="Street" />
            <TextInput source="buildingName" label="Building Name" />
            <TextInput source="city" label="City" />
            <TextInput source="state" label="State" />
            <TextInput source="country" label="Country" />
            <TextInput source="pincode" label="Pincode" />
        </SimpleForm>
    </Edit>
);