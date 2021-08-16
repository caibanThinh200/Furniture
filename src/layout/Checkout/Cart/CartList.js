import Wrapper from "../../../Component/Wrapper";
import { Card, Result, Button  } from "antd";
import TAG_DEFINE from "../../../constant/define";
import CartItem from "./CartItem";
import { useState } from "react";

const Cart = props => {
    const [cart, setCart] = useState([1,1,1,1,1])
    return (
        <Wrapper>
            {
                cart.length > 0 ? <Card bordered={false} title={<p className="h4 furniture-cart__title font-weight-bold">{TAG_DEFINE.PRODUCT.title}</p>} 
                            className="pl-5 pr-5 pt-3  w-100 justify-content-center furniture-cart">
                    {
                        cart.map(item => <Wrapper>
                            <CartItem/>
                        </Wrapper>)
                    }
                </Card> : <Wrapper>
                    <Result
                        status="404"
                        title="404"
                        subTitle="Chưa có sản phẩm trong giỏ hàng"
                        extra={<Button type="primary">Back Home</Button>}
                    />
                </Wrapper>
            }
              
        </Wrapper>
    )
}

export default Cart;