import { List, Datagrid, TextField, DeleteButton, EditButton, Create, Edit, SimpleForm, TextInput, Identifier, ReferenceInput, SelectInput, BooleanInput, BooleanField } from "react-admin";

export const AdminList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="userId" label="User Id" />
                <TextField source="roles[0].roleName" label="Role" />
                <TextField source="firstName" label="First Name" />
                <TextField source="lastName" label="Last Name" />
                <TextField source="mobileNumber" label="Mobile Number" />
                <TextField source="email" label="Email" />
                <EditButton />
                <DeleteButton />
            </Datagrid>

        </List>
    )

};


export const AdminEdit = () => (
    <Edit >
        <SimpleForm>
            <TextInput source="userId" label="User Id" disabled />
            <SelectInput
                source="roles[0].roleId"
                label="Role ID"
                choices={[
                    { id: '101', name: 'ADMIN' },
                    { id: '102', name: 'USER' },
                ]}
            />
            <TextInput source="firstName" label="First Name" />
            <TextInput source="lastName" label="Last Name" />
            <TextInput source="mobileNumber" label="Mobile Number" />
            <TextInput source="email" label="Email" />
        </SimpleForm>
    </Edit>
);


// export const AdminEdit = () => (
//     <Edit>
//         <SimpleForm>
//             <TextInput source="addressId" label="Address Id" disabled />
//             <TextInput source="street" label="Street" />
//             <TextInput source="buildingName" label="Building Name" />
//             <TextInput source="city" label="City" />
//             <TextInput source="state" label="State" />
//             <TextInput source="country" label="Country" />
//             <TextInput source="pincode" label="Pincode" />
//         </SimpleForm>
//     </Edit>
// );