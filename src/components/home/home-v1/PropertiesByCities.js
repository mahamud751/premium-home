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
      `${process.env.NEXT_PUBLIC_BASEURL}/v1/admin/locations`,
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
  } = useQuery({
    queryKey: ["locations"],
    queryFn: fetchLocations,
  });

  console.log(locations);

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
          <p className="text-center text-red-600">{isError}</p>
        </div>
      </section>
    );
  }
  return (
    <>
      {locations?.slice(0, 8)?.map((city) => (
        <div className="col-sm-6 col-lg-3" key={city?.id}>
          <Link href="/grid-full-2-col">
            <div className="home9-city-style  position-relative mb30 mb20-md mb0-sm d-flex align-items-center">
              <div className="city-img flex-shrink-0 ">
                <Image
                  width={110}
                  height={110}
                  src={city?.image}
                  alt="listing"
                  className="rounded"
                />
              </div>
              <div className="flex-shrink-1 ms-3">
                <h6 className="mb-1">{city?.title}</h6>
                <p className="mb-0">{city.propertyCount} property</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PropertyByCities;
