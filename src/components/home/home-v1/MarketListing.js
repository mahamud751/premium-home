"use client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const MarketListing = ({ listings }) => {
  const getSingleImage = (images) => {
    if (Array.isArray(images)) {
      return images[0] || "/path/to/fallback-image.jpg";
    }
    return images || "/path/to/fallback-image.jpg";
  };

  return (
    <>
      {listings.length > 0 ? (
        listings.map((listing) => (
          <div className="item col-lg-4 market_page" key={listing.id}>
            <Link href={`/property/${listing.id}`}>
              {" "}
              <div className="listing-style1">
                <div className="list-thumb">
                  <Image
                    width={1000}
                    height={1000}
                    className="w-100 h-96 cover"
                    src={getSingleImage(listing.images)}
                    alt="listing"
                  />
                </div>
                <div className="list-content">
                  <h6 className="list-title fw-bold">
                    <Link href={`/property/${listing.id}`}>
                      {listing?.description.slice(0, 60) || "Property Listing"}
                    </Link>
                  </h6>

                  <div className="list-meta d-flex align-items-center my-3">
                    <a href="#">
                      <span className="flaticon-home" /> {listing.floor_number}{" "}
                      Floor
                    </a>
                    <a href="#">
                      <span className="flaticon-bed" /> {listing.bedroom} bed
                    </a>
                    <a href="#">
                      <span className="flaticon-shower" /> {listing.bathroom}{" "}
                      bath
                    </a>
                    <a href="#">
                      <span className="flaticon-expand" /> {listing.flat_size}{" "}
                      sqft
                    </a>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <p
                      className="fw-bold"
                      style={{ fontSize: "15px", color: "#00C194" }}
                    >
                      {listing.total_price.toLocaleString()} ৳
                    </p>
                    <p
                      className="fw-bold"
                      style={{ fontSize: "15px", color: "#00C194" }}
                    >
                      {listing.status || "N/A"}
                    </p>
                  </div>
                  <div
                    className="d-flex justify-content-center"
                    style={{
                      backgroundColor: "#00C194",
                      padding: "8px 0",
                      borderRadius: "10px",
                    }}
                  >
                    <button
                      style={{
                        border: 0,
                        background: "none",
                        fontSize: "20px",
                        color: "white",
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center">No properties found</p>
      )}
    </>
  );
};

export default MarketListing;
