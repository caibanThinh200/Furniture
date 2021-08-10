import Wrapper from "../Component/Wrapper";
import "../style/header.scss";
import TAG_DEFINE from "../constant/define";
import Icon from "../Component/Icon";
import clsx from "clsx";
import { Link } from "react-router-dom";

const NavBar = props => {
    return (
        <Wrapper 
            style={{backgroundImage: `url("/wood.png")`}} 
            className={clsx("w-100 furniture_header__nav-wrapper navbar fixed-top", props.className)}
        >
            <Wrapper className="w-100 pt-2">
                <ul className="row">
                    <li className="float-left furniture_header__nav-link ml-5">
                        <div className="rounded-circle">
                            <Icon color="white" type="logo"/>
                        </div>
                    </li>
                    {
                        Object.values(TAG_DEFINE.PAGE.HEADER).length > 0 && Object.values(TAG_DEFINE.PAGE.HEADER).map((title, index) => 
                            <Link 
                                to={title.path}
                                key={index}
                                className="float-left furniture_header__nav-link ml-5">
                                <h5 className="font-weight-bold">
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