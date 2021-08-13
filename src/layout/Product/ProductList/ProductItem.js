import { Card } from "antd";
import clsx from "clsx";
import Wrapper from "../../../Component/Wrapper";

const ProductItem = props => {
    const { Meta } = Card
    return (
        <Card
            {...props}
            className={clsx(props.className)}
            hoverable
            style={{ width: 240 }}
            cover={<Wrapper className="container">
                <img className="w-75 mt-3 ml-3" alt="example" src="/define/71vbR3+AzaL._AC_SX466_.jpg" />
            </Wrapper>}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    )
}

export default ProductItem;