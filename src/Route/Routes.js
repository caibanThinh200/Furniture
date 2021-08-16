import Homepage from "../layout/Home/index";
import Product from "../layout/Product/index";
import Cart from "../layout/Checkout/index";

export const ROUTES = {
    HOMEPAGE: {
        title: "Trang chủ",
        exact: true,
        path: "/",
        component: props => <Homepage {...props}/>
    },
    PRODUCT: {
        title: "Sản phẩm",
        exact: true,
        path: "/product",
        component: props => <Product {...props}/>
    },
    CART: {
        title: "Giỏ hàng",
        exact: true,
        path: "/cart",
        component: props => <Cart {...props}/>
    }
}