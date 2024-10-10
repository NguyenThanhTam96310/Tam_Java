import React from 'react';
import { List, useRedirect, useNotify, useRefresh, useRecordContext, ReferenceField, TextField, Show, SimpleShowLayout, NumberField, ArrayField, ImageField, Datagrid, Identifier } from 'react-admin';
import PDFButton from './PDFButton';

const CustomPDFButton = () => {
    const record = useRecordContext();

    if (!record) {
        return <span>Loading...</span>;
    }

    if (!record.id) {
        return <span>No cart ID</span>;
    }

    return <PDFButton />;
};

export const CartList = () => {
    const redirect = useRedirect();
    const handleRowClick = (id: Identifier | undefined, resource: string | undefined, record: { email: string; }) => {
        if (id) {
            localStorage.setItem('globalCartId', id.toString());
        }
        localStorage.setItem("globalEmailCart", record.email);
        redirect('show', resource, id);
    };
    return (
        <List>
            <Datagrid rowClick={handleRowClick}>
                <TextField source="cart.cartId" label="Cart ID" />
                <TextField source="cart.totalPrice" label="Total Price" />
                <TextField source="email" label="Email" />
            </Datagrid>
        </List>
    );
};

export const CartShow = () => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onError = (error: { message: any; }) => {
        notify(`Could not load cart: ${error.message}`, { type: 'error' });
        redirect('/carts');
        refresh();
    };

    if (!localStorage.getItem("globalEmailCart")) {
        return <span>Error: Email is required</span>;
    }

    return (
        <Show
            queryOptions={{
                meta: { email: localStorage.getItem("globalEmailCart") },
                onError,
            }}
        >
            <SimpleShowLayout>
                <CustomPDFButton />
                <TextField source="id" label="Cart ID" />
                <NumberField source="totalPrice" label="Total Price" />

                {/* ArrayField for displaying products */}

                <ArrayField source="cartItemDTOS" label="Cart Items">
                    <Datagrid>
                        {/* Displaying the quantity and other information from cartItemDTO */}
                        <TextField source="product.id" label="Product ID" />
                        <TextField source="product.productName" label="Product Name" />
                        <ImageField source="product.image" label="Image" />
                        <NumberField source="quantity" label="Quantity" />
                        <TextField source="product.description" label="Description" />
                        <NumberField source="product.price" label="Price" />
                        <NumberField source="product.discount" label="Discount" />
                        <NumberField source="product.specialPrice" label="Special Price" />
                        <ReferenceField source="product.category.categoryId" reference="categories" label="Category">
                            <TextField source="product.category.categoryName" />
                        </ReferenceField>
                    </Datagrid>
                </ArrayField>

            </SimpleShowLayout>

        </Show>
    );
};