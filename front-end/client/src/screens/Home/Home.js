import Layout from "../../components/Layout/Layout.js";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "../Home/Home.css";

import background from "../../Assets/About (3) 1.png";

import powerpuff_headliner from "../../Assets/headliners/WEBSITE_HEADLINER_Powerpuff_Girls_FC_052322_(1).png";
import rickmorty_headliner from "../../Assets/headliners/WEBSITE_HEADLINER_Rick_and_Morty_FC_052322_(1).png";
import sesamestreet_headliner from "../../Assets/headliners/WEBSITE_HEADLINER_Sesame_St_FC_052322_(1).png";
import shrek_headliner from "../../Assets/headliners/WEBSITE_HEADLINER_Shrek_2_FC_052322_(1).png";

import amazon from "../../Assets/clients/WEBSITE_CLIENTS_Amazon_Prime_Video_Logo_GMJ_060322.png";
import cartoonnetwork from "../../Assets/clients/WEBSITE_CLIENTS_Cartoon_Network_Logo_GMJ_060322.png";
import disney from "../../Assets/clients/WEBSITE_CLIENTS_Disney_Logo_GMJ_060322.png";
import netflix from "../../Assets/clients/WEBSITE_CLIENTS_Netflix_Logo_GMJ_060322.png";

import voices_banner from "../../Assets/WEBSITE ART voice actor collage NB 060322.png";

export default function Home() {
  return (
    <Layout>
      <div style={{ backgroundImage: `url(${background})` }}>
        <p className="home-text">
          Founded by <b>DREAMWORKS</b> alumnus <b>Mike de Seve</b>, Baboon has
          grown to become one of the most accomplished animation writing and
          voicing teams worldwide, with <b>31 EMMYS</b> collectively, and
          credits on dozens of the most popular animated films and series for
          families and teens. <b>Learn More</b>
        </p>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={1}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          customTransition="all 1s linear"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={0.5}
          swipeable
          transitionDuration={1000}
        >
          <div className="carousel-img">
            <img className="cimg" src={powerpuff_headliner} />
          </div>
          <div className="carousel-img">
            <img className="cimg" src={rickmorty_headliner} />
          </div>
          <div className="carousel-img">
            <img className="cimg" src={shrek_headliner} />
          </div>
          <div className="carousel-img">
            <img className="cimg" src={sesamestreet_headliner} />
          </div>
        </Carousel>
        <Link
          to="/diversity"
          style={{ textDecoration: "none", color: "black" }}
        >
          <h2>Leaders in Diversity</h2>
          <div className="diversity-banner">
            <div>Diversity Image 1</div>
            <div>Diversity Image 2</div>
            <div>Diversity Image 3</div>
            <div>Diversity Image 4</div>
          </div>
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nec
            suspendisse purus, massa tellus risus. Cursus malesuada pulvinar
            sagittis eget. Quis convallis viverra sit risus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Non nec suspendisse purus,
            massa tellus risus. <b>Learn More</b>
          </p>
        </Link>
        <Link to="/clients" style={{ textDecoration: "none", color: "black" }}>
          <h2>Globally Recognized Clients</h2>
          <div className="logo-carosuel">
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlay
              autoPlaySpeed={1}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              customTransition="all 1s linear"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              partialVisbile={true}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 4,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={0.1}
              swipeable
              transitionDuration={1000}
            >
              <div className="carousel-img">
                <img src={amazon} className="clogo" />
              </div>
              <div className="carousel-img">
                <img src={cartoonnetwork} className="clogo" />
              </div>
              <div className="carousel-img">
                <img src={disney} className="clogo" />
              </div>
              <div className="carousel-img">
                <img src={netflix} className="clogo" />
              </div>
            </Carousel>
          </div>
        </Link>
        <h2>Top Voice Talent</h2>
        <div className="voice-container">
          <p className="voice-text">
            Text about top voice talent, Interesting content here
          </p>
          <img src={voices_banner} className="voices_img" />
        </div>
      </div>
    </Layout>
  );
}
