import clsx from "clsx";
import TAG_DEFINE from "../../constant/define";
import Wrapper from "../../Component/Wrapper";
import { Parallax, Background } from "react-parallax";
import Image from "../../Component/Image";

const Banner = (props) => {
  return (
    <Wrapper
      id="carouselExampleIndicators"
      className={clsx("carousel slide", props.className)}
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {TAG_DEFINE.PAGE.HOMEPAGE.BANNER.image.length > 0 &&
          TAG_DEFINE.PAGE.HOMEPAGE.BANNER.image.map((item, index) => (
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={clsx(index === 0 && "active")}
            />
          ))}
      </ol>
      
        <Wrapper className="carousel-inner">
          <Parallax className="furniture_home__banner" strength={500}>
            {TAG_DEFINE.PAGE.HOMEPAGE.BANNER.image.length > 0 &&
              TAG_DEFINE.PAGE.HOMEPAGE.BANNER.image.map((item, index) => (
                <Background
                  className={clsx(
                    "carousel-item",
                    index === 0 && "active"
                  )}
                >

                  <img className="furniture_home__image" src={item.path} />
                </Background>
                // {/* <Wrapper
                // className="w-100 h-100"
                //     style={{
                //         backgroundImage: `url(${item.path})`
                //     }}>
                // </Wrapper> */}
              ))}
              </Parallax>
        </Wrapper>
      
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
      </a>
    </Wrapper>
  );
};

export default Banner;
