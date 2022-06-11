import Layout from "../../components/Layout/Layout.js";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "../Home/Home.css";

import background from "../../Assets/About_(3)_1.png";

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
      <div
        className="home-container"
        style={{
          backgroundImage: `url("${background}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <Carousel
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
        > */}
        <Carousel
          additionalTransfrom={0}
          autoPlay={true}
          autoPlaySpeed={3000}
          centerMode={true}
          className=""
          containerClass="container"
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
              items: 1,
              partialVisibilityGutter: 20,
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
          slidesToSlide={1}
          swipeable
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
        <p className="home-text">
          For more than two decades, Baboon Animation's team members have
          provided Emmy-winning and Oscar-nominated writing, directing, and
          voice to the most successful animation studios and networks in the
          world. Founded by DREAMWORKS alumnus Mike de Seve, Baboon has grown to
          become one of the most accomplished animation writing and voicing
          teams worldwide, with 31 EMMYS collectively, and credits on dozens of
          the most popular animated films and series for families and teens.
          Baboon is commited to writing, developing, and voicing content for and
          by underrepresented groups.
        </p>
        <Link
          to="/diversity"
          style={{ textDecoration: "none", color: "black" }}
        >
          <h2>Leaders in Diversity</h2>
          <p className="home-text">
            With our new Warner Bros. show, Garbage Boy & Trash Can by African
            creator Ridwan Moshood, we're launching Baboon Africa. We now boast
            the very best of talent in writing, comedy, and acting in Africa and
            the US! <b>Learn More</b>
          </p>
          <div className="diversity-home">
            <img
              className="home-diversity-img"
              src="/home/garbage boy pic.png"
            />
            <img
              className="home-diversity-img"
              src="/home/garbage boy pic.png"
            />
            <img
              className="home-diversity-img"
              src="/home/garbage boy pic.png"
            />
            <img
              className="home-diversity-img"
              src="/home/garbage boy pic.png"
            />
          </div>
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
