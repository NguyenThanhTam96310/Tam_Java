import React from 'react';
import { List, useRedirect, useNotify, useRefresh, useRecordContext, ReferenceField, TextField, Show, SimpleShowLayout, NumberField, ArrayField, ImageField, Datagrid, Identifier } from 'react-admin';
import OrderButton from './OrderButton';


const CustomOrderButton = () => {
    const record = useRecordContext();

    if (!record) {
        return <span>Loading...</span>;
    }

    if (!record.id) {
        return <span>No cart ID</span>;
    }

    return <OrderButton />;
};

export const OrderList = () => {
    const redirect = useRedirect();
    const handleRowClick = (id: Identifier | undefined, resource: string | undefined, record: { email: string; }) => {
        if (id) {
            localStorage.setItem('globalOrderId', id.toString());
        }
        localStorage.setItem("globalEmailOrder", record.email);
        redirect('show', resource, id);
    };
    return (
        <List>
            <Datagrid rowClick={handleRowClick}>
                <TextField source="orderId" label="Order ID" />
                <TextField source="totalAmount" label="Total Amount" />
                <TextField source="email" label="Email" />
                <TextField source="payment.paymentMethod" label="Payment Method" />
            </Datagrid>
        </List>
    );
};


export const OrderShow = () => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onError = (error: { message: any; }) => {
        notify(`Could not load orders: ${error.message}`, { type: 'error' });
        redirect('/orders');
        refresh();
    };

    if (!localStorage.getItem("globalEmailOrder")) {
        return <span>Error: Email is required</span>;
    }

    return (
        <Show
            queryOptions={{
                meta: { email: localStorage.getItem("globalEmailOrder") },
                onError,
            }}
        >
            <SimpleShowLayout>
                <CustomOrderButton />
                <TextField source="id" label="Order ID" />
                <NumberField source="totalAmount" label="Total Amount" />
                <ArrayField source="orderItems" label="Order Items">
                    <Datagrid>
                        <TextField source="id" label="Order Item ID" />
                        <TextField source="product.id" label="Product ID" />
                        <TextField source="product.productName" label="Product Name" />
                        <ImageField source="product.image" label="Image" />
                        <TextField source="product.description" label="Description" />
                        <NumberField source="product.quantity" label="Quantity" />
                        <NumberField source="product.price" label="Price" />
                        <NumberField source="product.discount" label="Discount" />
                        <NumberField source="product.specialPrice" label="Special Price" />
                        <NumberField source="product.category.name" label="Category" />
                    </Datagrid>
                </ArrayField>
            </SimpleShowLayout>
        </Show>
    );
};