"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Partner = () => {
 
  const [showSlider, setShowSlider] = useState(false)
  useEffect(() => {
    setShowSlider(true)
  }, [])

  const [partnerImages, setPartnerImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartnerImages = async () => {
      try {
        const response = await axios.get(
          "https://premium.samironbarai.xyz/v1/brand-logos"
        );
        setPartnerImages(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch banner data");
        setLoading(false);
      }
    };

    fetchPartnerImages();
  }, []);

  if (loading) {
    return (
      <section className="our-faq pt-20 py-12 md:px-4">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center ">Loading Banners...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="our-faq pt-20 py-12 md:px-4">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center text-red-600">{error}</p>
        </div>
      </section>
    );
  }
  

  return (
    <>
      {showSlider && (
        <Swiper
          spaceBetween={10} // Adjust the spacing between items as per your preference
          slidesPerView={6} // Default number of slides per view
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
          loop
          autoplay={{
            delay: 3000, // Adjust the autoplay delay (in milliseconds) as per your preference
            disableOnInteraction: false,
          }}
          className="swiper-container"
        >
          {partnerImages?.map((imageName) => (
            <SwiperSlide key={imageName?.id}>
              <div className="item">
                <div className="partner_item">
                  <Image
                    width={122}
                    height={24}
                    style={{ objectFit: "contain" }}
                    className="wa m-auto"
                    src={imageName?.image[0]}
                    alt={imageName?.title}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Partner;
