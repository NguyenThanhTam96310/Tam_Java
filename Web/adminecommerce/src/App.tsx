import { Admin, Resource, ShowGuesser, EditGuesser, ListGuesser, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import { Layout } from "./Layout";
import CategoryIcon from '@mui/icons-material/Category';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import { dataProvider } from "./dataProvider";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import { Dashboard } from "./component/Dashboard";
import { authProvider } from "./authProvider";
import { CategoryList, CategoryCreate, CategoryEdit } from "./component/category";
import { ProductList, ProductCreate, ProductEdit } from "./component/product";
import { CartList, CartShow } from "./component/Carts";
import ProductImageUpdate from "./component/ProductImageUpdate";
import { AddressCreate, AddressEdit, AddressList } from "./component/Address";
import { AdminList } from "./component/Admin";
import { OrderList } from "./component/Order";

export const App = () => (
  <Admin authProvider={authProvider} layout={Layout} dataProvider={dataProvider} dashboard={Dashboard}>
    /

    {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
    <Resource name="users" list={UserList} show={ShowGuesser}  icon={UserIcon} /> */}
    <CustomRoutes>
      <Route path="/products/:id/update-image" element={<ProductImageUpdate />} />
    </CustomRoutes>
    <Resource name="categories" list={CategoryList} create={CategoryCreate} edit={CategoryEdit} icon={CategoryIcon} />
    <Resource name="products" list={ProductList} create={ProductCreate} edit={ProductEdit} icon={Inventory2Icon} />
    <Resource name="carts" list={CartList} show={CartShow} icon={ShoppingCartIcon} />
    <Resource name="addresses" list={AddressList} edit={AddressEdit} create={AddressCreate} icon={LocationOnIcon} />
    <Resource name="admin" list={AdminList} icon={PersonIcon} />
    <Resource name="orders" list={OrderList} icon={ReceiptLongIcon} />
  </Admin>
);
