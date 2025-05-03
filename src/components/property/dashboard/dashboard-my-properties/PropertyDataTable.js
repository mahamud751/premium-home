"use client";
import { useAuth } from "@/hooks/auth";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const getStatusStyle = (status) => {
  switch (status) {
    case "pending":
      return "pending-style style1";
    case "active":
      return "pending-style style2";
    default:
      return "";
  }
};

const PropertyDataTable = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://premium.samironbarai.xyz/v1/orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrders(response?.data?.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch order data");
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <section className="pt-20 py-12 md:px-4">
        <div className="container mx-auto max-w-7xl text-center">
          Loading Orders...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="pt-20 py-12 md:px-4">
        <div className="container mx-auto max-w-7xl text-center text-red-600">
          {error}
        </div>
      </section>
    );
  }

  return (
    <table className="table-style3 table at-savesearch">
      <thead className="t-head">
        <tr>
          <th>Listing title</th>
          <th>Flat Size</th>
          <th>Status</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="t-body">
        {orders?.map((property) => (
          <tr key={property.id}>
            <th scope="row">
              <div className="listing-style1 dashboard-style d-xxl-flex align-items-center mb-0">
                <div className="list-thumb">
                  <Image
                    width={110}
                    height={94}
                    className="w-100"
                    src={`${property?.images}`}
                    alt="Flat"
                  />
                </div>
                <div className="list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4">
                  <div className="h6 list-title">
                    <Link href={`/single-v1/${property?.id}`}>
                      Flat No: {property?.id} — {property?.flat_type} Type
                    </Link>
                  </div>
                  <p className="list-text mb-0">{property?.description}</p>
                  <div className="list-price">
                    <a href="#">৳ {property?.total_price.toLocaleString()}</a>
                  </div>
                </div>
              </div>
            </th>
            <td className="vam">{property?.flat_size} sqft</td>
            <td className="vam">
              <span className={getStatusStyle(property?.status.toLowerCase())}>
                {property?.status}
              </span>
            </td>
            <td className="vam">৳ {property?.unit_price.toLocaleString()}</td>
            <td className="vam">
              <div className="d-flex">
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`edit-${property.id}`}
                >
                  <span className="fas fa-pen fa" />
                </button>
                <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`delete-${property.id}`}
                >
                  <span className="flaticon-bin" />
                </button>

                <ReactTooltip
                  id={`edit-${property.id}`}
                  place="top"
                  content="Edit"
                />
                <ReactTooltip
                  id={`delete-${property.id}`}
                  place="top"
                  content="Delete"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PropertyDataTable;
