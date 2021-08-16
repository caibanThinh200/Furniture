import Wrapper from "../Component/Wrapper";
import "../style/header.scss";
import TAG_DEFINE from "../constant/define";
import Icon from "../Component/Icon";
import clsx from "clsx";
import { Link } from "react-router-dom";

const NavBar = props => {
    return (
        <Wrapper 
            // style={{backgroundImage: `url("/wood.png")`}} 
            className={clsx("w-100 furniture_header__nav-wrapper navbar position-absolute mt-2", props.className)}
        >
            <Wrapper className="w-100">
                <ul className="row">
                    {
                        Object.values(TAG_DEFINE.PAGE.HEADER).length > 0 && Object.values(TAG_DEFINE.PAGE.HEADER).map((title, index) => 
                            <Link 
                                to={title.path}
                                key={index}
                                className={clsx("float-left furniture_header__nav-link ml-5")}>
                                <h5 className={clsx("font-weight-bold p-2", title.bold ? "furniture_header__nav-link--logo" : "mt-3")}>
                                    {title.title}
                                </h5>
                            </Link>
                        )
                    }
                </ul>
            </Wrapper>
        </Wrapper>
    )
}

export default NavBar;