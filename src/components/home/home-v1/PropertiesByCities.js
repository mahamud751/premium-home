"use client";
import { useAuth } from "@/hooks/auth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const PropertyByCities = () => {
  const { token } = useAuth();

  const fetchLocations = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASEURL}/v1/projects`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  };

  const {
    data: locations,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchLocations,
  });

  if (isLoading) {
    return (
      <section className="our-faq pt-0 py-12 md:px-4">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center">Loading Locations...</p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="our-faq pt-0 py-12 md:px-4">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center text-red-600">
            Error loading projects: {error?.message || "Something went wrong"}
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {locations?.slice(0, 8)?.map((city) => {
        // Determine the image source
        const imageSrc = Array.isArray(city?.images)
          ? city.images[0] // Use the first image if images is an array
          : typeof city?.images === "string" && city.images
          ? city.images // Use the string if images is a string
          : "/fallback-image.jpg"; // Fallback image

        return (
          <div className="col-sm-6 col-lg-3" key={city?.id}>
            <Link href="/grid-full-2-col">
              <div className="home9-city-style position-relative mb30 mb20-md mb0-sm d-flex align-items-center">
                <div className="city-img flex-shrink-0">
                  <Image
                    width={110}
                    height={110}
                    src={imageSrc}
                    alt={city?.name || "Project image"}
                    className="rounded"
                    onError={(e) => {
                      e.target.src = "/fallback-image.jpg"; // Fallback on error
                    }}
                  />
                </div>
                <div className="flex-shrink-1 ms-3">
                  <h6 className="mb-1">{city?.name}</h6>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default PropertyByCities;
