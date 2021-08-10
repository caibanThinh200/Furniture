import Wrapper from "../Component/Wrapper";
import { Affix, Card, Descriptions } from "antd";
import "../style/footer.scss";
import clsx from "clsx";

const Footer = props => {
    return (
        <Wrapper style={{ backgroundImage: "url('/define/images.jpg')"}} className={clsx("furniture_footer__wrapper w-100 p-5 h200", props.className)}>
            <Wrapper className="row">
                <Wrapper className="col text-center">
                    <h3 className="furniture_footer__title">
                        About us 
                    </h3>
                </Wrapper>
                <Wrapper className="col text-center">
                    <h3 className="furniture_footer__title">
                        About us 
                    </h3>
                </Wrapper>
                <Wrapper className="col text-center">
                    <h3 className="furniture_footer__title">
                        About us 
                    </h3>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default Footer;