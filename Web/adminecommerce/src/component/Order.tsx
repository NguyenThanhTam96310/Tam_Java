import React from 'react';
import { List, useRedirect, useNotify, useRefresh, useRecordContext, ReferenceField, TextField, Show, SimpleShowLayout, NumberField, ArrayField, ImageField, Datagrid, Identifier } from 'react-admin';
import PDFButton from './PDFButton';

// const CustomPDFButton = () => {
//     const record = useRecordContext();

//     if (!record) {
//         return <span>Loading...</span>;
//     }

//     if (!record.id) {
//         return <span>No cart ID</span>;
//     }

//     return <PDFButton />;
// };

export const OrderList = () => (
    <List>
        <Datagrid >
            <TextField source="orderId" label="Oder ID" />
            <TextField source="totalAmount" label="Total Amount" />
            <TextField source="email" label="Email" />
            <TextField source="payment.paymentMethod" label="Payment Method" />
        </Datagrid>
    </List>
);


// export const CartShow = () => {
//     const notify = useNotify();
//     const refresh = useRefresh();
//     const redirect = useRedirect();

//     const onError = (error: { message: any; }) => {
//         notify(`Could not load cart: ${error.message}`, { type: 'error' });
//         redirect('/carts');
//         refresh();
//     };

//     if (!localStorage.getItem("globalEmailCart")) {
//         return <span>Error: Email is required</span>;
//     }

//     return (
//         <Show
//             queryOptions={{
//                 meta: { email: localStorage.getItem("globalEmailCart") },
//                 onError,
//             }}
//         >
//             <SimpleShowLayout>
//                 <CustomPDFButton />
//                 <TextField source="id" label="Cart ID" />
//                 <NumberField source="totalPrice" label="Total Price" />
//                 <ArrayField source="products" label="Products">
//                     <Datagrid>
//                         <TextField source="id" label="Product ID" />
//                         <TextField source="productName" label="Product Name" />
//                         <ImageField source="image" label="Image" />
//                         <TextField source="description" label="Description" />
//                         <NumberField source="quantity" label="Quantity" />
//                         <NumberField source="price" label="Price" />
//                         <NumberField source="discount" label="Discount" />
//                         <NumberField source="specialPrice" label="Special Price" />
//                         <ReferenceField source="category.categoryId" reference="categories" label="Category">
//                             <TextField source="categoryName" />
//                         </ReferenceField>
//                     </Datagrid>
//                 </ArrayField>
//             </SimpleShowLayout>
//         </Show>
//     );
// };