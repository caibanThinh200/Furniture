import Banner from "./Banner";
import "../../style/homepage.scss"
import Wrapper from "../../Component/Wrapper";
import {Divider} from "antd"
import TAG_DEFINE from "../../constant/define";
import ProductRevenue from "./ProductRevenue";
import ServiceIntro from "./ServiceIntro";

const Homepage = props => {
    return (
        <Wrapper>
            <Banner className=""/>
            <Wrapper className="container w-100 text-center">
                <Divider className="mt-5 mb-5"></Divider>
                <h3 className="furniture_home__title">
                    {TAG_DEFINE.PAGE.HOMEPAGE.GUARANTEE}
                </h3>
                <h5 className="furniture_home_content mt-2">
                    "{TAG_DEFINE.PAGE.HOMEPAGE.QUOTE}"
                </h5>
                <div className="dropdown-divider mt-5"></div>
            </Wrapper>
            <Wrapper className="mt-5 mb-5 container pl-5 h-100">
                <Wrapper className="row">
                    {
                        TAG_DEFINE.PAGE.HOMEPAGE.CATEGORIES_BOX.map(item => 
                            <Wrapper 
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover"
                                }} 
                                className="col-3 furniture_home__demo m-4 ml-5"
                            >
                                <h3 className="text-center mt-5 font-weight-bold furniture_home__demo__title">
                                    {item.title}
                                </h3>
                            </Wrapper>
                        )
                    }
                </Wrapper>
            </Wrapper>
            <Wrapper className="mb-5">
                <ProductRevenue className="mt200"/>
            </Wrapper>
            <Wrapper className="mt200">
                <ServiceIntro title={TAG_DEFINE.PAGE.HOMEPAGE.SERVICES_INTRO.title}/>
            </Wrapper>
        </Wrapper>
    )
}

export default Homepage;