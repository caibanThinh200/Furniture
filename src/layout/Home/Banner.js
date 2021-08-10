import clsx from "clsx"
import TAG_DEFINE from "../../constant/define";
import Wrapper from "../../Component/Wrapper";

const Banner = props => {
    return (
        <Wrapper id="carouselExampleIndicators" className={clsx("carousel slide", props.className)} data-ride="carousel">
        <ol className="carousel-indicators">
          {
            TAG_DEFINE.PAGE.HOMEPAGE.BANNER.image.length > 0 && TAG_DEFINE.PAGE.HOMEPAGE.BANNER.image.map((item, index) => 
              <li data-target="#carouselExampleIndicators" data-slide-to={index} className={clsx(index === 0 && 'active')} />
            )
          }
        </ol>
        <Wrapper className="carousel-inner">
          {
            TAG_DEFINE.PAGE.HOMEPAGE.BANNER.image.length > 0 && TAG_DEFINE.PAGE.HOMEPAGE.BANNER.image.map((item, index) => (
              <Wrapper className={clsx("carousel-item furniture_home__banner", index === 0 && 'active')}>
                <Wrapper 
                className="w-100 h-100"
                    style={{
                        backgroundImage: `url(${item.path})`
                    }}>
                </Wrapper>
              </Wrapper>
            ))
          }
        </Wrapper>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </a>
      </Wrapper>
    );
}

export default Banner;