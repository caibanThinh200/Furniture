import Homepage from "../layout/Home/index";
import Product from "../layout/Product/index";

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
    }
}