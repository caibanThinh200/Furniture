import { Divider, InputNumber, Space, Tag } from "antd";
import Wrapper from "../../../Component/Wrapper";
import Image from "../../../Component/Image";
import Input from "../../../Component/Input";
import Icon from "../../../Component/Icon";
import clsx from "clsx";

const CartItem = props => {
    return (
        <Wrapper hoverable className={clsx("bg-body rounded border row mb-5", props.className)}>
            <Space size={8} className="col mr-2 p-0">
                <Image
                    src="/define/c0297ca755b51b8572f4f28d18293b0b.jpg"
                    className="rounded h-100 w-100"
                    preview={false}
                />
            </Space>
            <Wrapper className="col-6">
                <Wrapper className="mt-4">
                    <p className="h5 font-monospace font-weight-light">Econormic chair</p>
                    <Wrapper className="mt-4">
                        <span>Giá tiền:</span>
                        <span className="ml-1 font-weight-bold furniture_home__product__price">2.990.000 VND</span>
                    </Wrapper>
                    <Wrapper className="mt-3">
                        <Tag color="red"><Icon type="delete"/><span>Xóa sản phẩm</span></Tag>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            <Wrapper className="mb-3 col-2 mt-4 float-right">
                <span className="h6 font-monospace font-weight-light">Số lượng:</span>
                <InputNumber autoFocus className="w-50 ml-2" defaultValue="1"/>
            </Wrapper>
        </Wrapper>
    )
}

export default CartItem;
