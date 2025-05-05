import Explore from "@/components/common/Explore";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

import HolderBenifits from "@/components/common/HolderBenifits";
import Partner from "@/components/common/Partner";
import Benifits from "@/components/home/home-v1/Benifits";
import CustomerReviews from "@/components/home/home-v1/CustomerReviews";
import FilterProperties from "@/components/home/home-v1/FilterProperties";
import Header from "@/components/home/home-v1/Header";
import PropertiesByCities from "@/components/home/home-v1/PropertiesByCities";
import RealStateCombines from "@/components/home/home-v1/RealStateCombines";
import ReturnCalculator from "@/components/home/home-v1/ReturnCalculator";
import Slider from "@/components/home/home-v1/Slider";
import StartBuying from "@/components/home/home-v1/StartBuying";
import PopularCollection from "@/components/pages/popular-collection/popular-collection";
import Reviews from "@/components/pages/reviews/Reviews";
import Link from "next/link";
import Blog from "@/components/home/home-v1/Blog";
import DefaultHeader from "@/components/common/DefaultHeader";

export const metadata = {
  title: "The Premium Homes Ltd",
};

const Home_V1 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home Banner Style V1 */}

      <Slider />
      {/* End Home Banner Style V1 */}

      {/* Explore Apartment */}
      {/* <section
        className="pt0 pb90 pb10-md pt-5"
        style={{
          backgroundColor: "white",
          zIndex: 2,
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="main-title text-center">
                <h2 className="title">See How it Works </h2>
                <p className="paragraph">
                  Property ownership has never been easier
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <Explore />
          </div>
        </div>
      </section> */}
      {/* End Explore Apartment */}
      <section className="pb40-md pb90">
        <div className="container">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Properties by Cities</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End col-lg-9 */}

            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/map-v4">
                  See All Cities
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            {/* End col-lg-3 */}
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <PropertiesByCities />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* Popular collection */}
      <section className="pt-0 pb60">
        <div className="container">
          <PopularCollection />
        </div>
      </section>
      {/* Reviews */}
      <section className="pt-0 pb60">
        <Reviews />
      </section>
      {/* Featured Listings */}
      <section className="pt-0 pb60">
        <div className="container">
          <FilterProperties />
        </div>
      </section>
      {/* End Featured Listings */}

      {/* Explore property-city */}
      {/* <section className="pb40-md pb90">
        <div className="container investor_calculator">
          <h2 className="text-center mb-4">Return Calculator</h2>
          <ReturnCalculator />
        </div>
      </section> */}
      {/* End Explore property-city */}

      {/* Our Partners */}

      <section
        className="our-partners pt0"
        style={{ backgroundColor: " #F7F7F7" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="main-title text-center">
                <h2
                  style={{
                    fontSize: "35px",
                    color: "#00C194",
                    textAlign: "center",
                    paddingTop: "30px",
                  }}
                >
                  Trusted by the world’s best
                </h2>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div
                className="dots_none nav_none"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Partner />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb90 pb20-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto" data-aos="fade-up">
              <div className="main-title text-start text-md-center">
                <h2 className="title">From Our Blog</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <Blog />
          </div>
          {/* End .row */}
        </div>
      </section>

      {/* End Our Partners */}

      {/* Our Testimonials */}

      {/* End Our Testimonials */}

      {/* <section
        className="our-partners pt0"
        style={{ backgroundColor: " #F7F7F7" }}
      >
        <div className="container">
          <HolderBenifits />
        </div>
      </section> */}
      {/* Customer Review Start*/}

      {/* Customer Review End */}

      {/* <section
        id="explore-property"
        className="pb90 pb30-md"
        style={{
          backgroundColor: "#F7F7F7",
        }}
      >
        <div className="container">
          <div
            className="  text-center"
            style={
              {
                // margin: "0 200px",
              }
            }
          >
            <div className=" " data-aos="fade-up" data-aos-delay="300">
              <h2
                className=" "
                style={{
                  color: "#00C194",
                  fontSize: "36px",
                }}
              >
                Real estate combines the best of all asset classes
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                }}
              >
                It is one of the most important asset classes for building long-
                term wealth
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div
                className="explore-apartment-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <RealStateCombines />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Start Buying */}
      {/* <StartBuying /> */}
      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V1;
