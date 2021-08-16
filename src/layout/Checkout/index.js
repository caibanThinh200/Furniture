import Wrapper from "../../Component/Wrapper";
import PageLayout from "../../Component/PageLayout";
import TAG_DEFINE from "../../constant/define";
import CartList from "./Cart/CartList";
import "../../style/cart.scss"
import SumarizeBox from "./SumarizeBox";

const Cart = props => {
    return (
        <Wrapper>
            <PageLayout title={TAG_DEFINE.CART.title} breadcrumb>
                <Wrapper className="row">
                    <Wrapper className="col-8 p-3">
                        <CartList/>
                    </Wrapper>
                    <Wrapper className="col-4">
                        <SumarizeBox/>
                    </Wrapper>
                </Wrapper>
            </PageLayout>
        </Wrapper>
    )
}

export default Cart;