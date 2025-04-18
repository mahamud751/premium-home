"use client";
import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const FilterProperties = () => {
  const [selectedTag, setSelectedTag] = useState("house");

  const filteredListings = listings.filter(
    (listing) => listing.tags && listing.tags.includes(selectedTag)
  );

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <>
      <div className="row wow fadeInUp" data-wow-delay="100ms">
        <div className="col-lg-6">
          <div className="main-title2">
            <h2 className="title">Discover Popular Properties</h2>
            <p className="paragraph">Aliquam lacinia diam quis lacus euismod</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="dark-light-navtab style2 text-start text-lg-end mt-0 mt-lg-4 mb-4">
            <ul className="nav nav-pills justify-content-start justify-content-lg-end">
              <li className="nav-item">
                <button
                  className={`nav-link mb10-sm ${
                    selectedTag === "house" ? "active" : ""
                  }`}
                  onClick={() => handleTagClick("house")}
                >
                  House
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link mb10-sm ${
                    selectedTag === "villa" ? "active" : ""
                  }`}
                  onClick={() => handleTagClick("villa")}
                >
                  Villa
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link mb10-sm ${
                    selectedTag === "office" ? "active" : ""
                  }`}
                  onClick={() => handleTagClick("office")}
                >
                  Office
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link mb10-sm ${
                    selectedTag === "apartments" ? "active" : ""
                  }`}
                  onClick={() => handleTagClick("apartments")}
                >
                  Apartments
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="row">
        <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
          <div className="tab-content">
            <div className="row">
              <Swiper
                spaceBetween={30}
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: ".featured-next__active",
                  prevEl: ".featured-prev__active",
                }}
                pagination={{
                  el: ".featured-pagination__active",
                  clickable: true,
                }}
                slidesPerView={1}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
              >
                {filteredListings.slice(0, 4).map((listing) => (
                  <SwiperSlide key={listing.id}>
                    <Link href={`/single-v1/${listing.id}`}>
                      <div className="item">
                        <div className="listing-style7 mb60">
                          <div className="list-thumb">
                            <Image
                              width={382}
                              height={248}
                              className="w-100 h-100 cover"
                              src={listing.image}
                              alt="listings"
                            />
                            <div className="sale-sticker-wrap">
                              {listing.forRent && (
                                <div className="list-tag rounded-0 fz12">
                                  <span className="flaticon-electricity" />
                                  FEATURED
                                </div>
                              )}
                              <div className="list-tag2 rounded-0 fz12">
                                FOR SALE
                              </div>
                            </div>

                            <div className="list-meta">
                              <a href="#" className="mr5">
                                <span className="flaticon-fullscreen" />
                              </a>
                              <a href="#" className="mr5">
                                <span className="flaticon-new-tab" />
                              </a>
                              <a href="#">
                                <span className="flaticon-like" />
                              </a>
                            </div>
                          </div>
                          <div className="list-content">
                            <h6 className="list-title">
                              <Link href={`/single-v1/${listing.id}`}>
                                {listing.title}
                              </Link>
                            </h6>

                            <div className="d-flex justify-content-between align-items-center">
                              <div className="list-price">
                                {listing.price} / <span>mo</span>
                              </div>
                              <div className="list-meta2 d-flex align-items-center">
                                <a href="#" className="mr10">
                                  <span className="flaticon-bed mr5" />{" "}
                                  {listing.bed}
                                </a>
                                <a href="#" className="mr10">
                                  <span className="flaticon-shower mr5" />{" "}
                                  {listing.bath}
                                </a>
                                <a href="#">
                                  <span className="flaticon-expand" />{" "}
                                  {listing.sqft}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="featured-prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination featured-pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="featured-next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterProperties;
