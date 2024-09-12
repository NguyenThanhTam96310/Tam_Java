import { List, Datagrid, TextField, DeleteButton, EditButton, Create, Edit, SimpleForm, TextInput, Identifier } from "react-admin";

export const AdminList = () => {
    const updateRole = (id: Identifier | undefined, resource: string | undefined, record: { email: string; }) => {
    };
    return (
        <List>
            <Datagrid>
                <TextField source="userId" label="User Id" />
                <TextField source="roles.[0].roleName" label="Role" />
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



function redirect(arg0: string, resource: string | undefined, id: Identifier | undefined) {
    throw new Error("Function not implemented.");
}
// export const AdminCreate = () => (
//     <Create >
//         <SimpleForm>
//             <TextInput source="street" label="Street" />
//             <TextInput source="buildingName" label="Building Name" />
//             <TextInput source="city" label="City" />
//             <TextInput source="state" label="State" />
//             <TextInput source="country" label="Country" />
//             <TextInput source="pincode" label="Pincode" />
//         </SimpleForm>
//     </Create>
// );

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