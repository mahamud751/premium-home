"use client";

import { useAuth } from "@/hooks/auth";
import axios from "axios";
import { useEffect, useState } from "react";

const OrderDetailsCard = ({ id }) => {
  const { token } = useAuth();
  const [order, setOrder] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log({ payments });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch order data
        const orderRes = await axios.get(
          `https://premium.samironbarai.xyz/v1/orders/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrder(orderRes.data.data);

        const paymentsRes = await axios.get(
          `https://premium.samironbarai.xyz/v1/payments?_entity_type=Product&_entity_id=1`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setPayments(paymentsRes.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch order or payments data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full text-center">
          <p className="text-lg text-gray-600 animate-pulse">
            Loading Order...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full text-center">
          <p className="text-lg text-red-500 font-medium">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className=" bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
          Order Details - Flat {order.flat_type}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 md:pt-0 pb-4">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">
              EMI Amount
            </h2>
            <p className="text-2xl font-bold text-yellow-500">৳250000</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">
              Paid Amount
            </h2>
            <p className="text-2xl font-bold text-green-500">৳250000</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">
              Due Amount
            </h2>
            <p className="text-2xl font-bold text-red-500">৳250000</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Basic Information */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Flat Information
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                <span className="font-medium">Flat Type:</span>{" "}
                {order.flat_type}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Floor:</span> {order.floor_number}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Size:</span> {order.flat_size}{" "}
                sq.ft
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Bedrooms:</span> {order.bedroom}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Bathrooms:</span> {order.bathroom}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Description:</span>{" "}
                {order.description}
              </p>
            </div>
          </div>

          {/* Card 2: Pricing Details */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Pricing Details
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                <span className="font-medium">Total Price:</span> BDT 500000
              </p>
              <p className="text-gray-700">
                <span className="font-medium">
                  Land Registration & Mutation:
                </span>{" "}
                BDT 650000
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Service charge:</span> BDT 85000
              </p>

              <p className="text-gray-700">
                <span className="font-medium">Payment Status:</span>{" "}
                {order.payment_status}
              </p>
            </div>
          </div>

          {/* Card 3: Features & Amenities */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Features & Amenities
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700">
                <span className="font-medium">Kitchen:</span> {order.kitchen}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Drawing Room:</span>{" "}
                {order.drawing_room}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Dining Room:</span>{" "}
                {order.dining_room}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Balcony:</span> {order.balcony}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Rooftop Gardening:</span>{" "}
                {order.rooftop_gardening ? "Yes" : "No"}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Car Parking:</span>{" "}
                {order.car_parking ? "Yes" : "No"}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Passenger Lift:</span>{" "}
                {order.passenger_lift}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Generator:</span>{" "}
                {order.generator ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>

        {/* Print Order Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 mt-5 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Print Order Details
          </button>
        </div>
      </div>

      {/* payment history */}
      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Transaction ID</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Method</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Note</th>
                <th className="p-3 text-left">Document</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((p) => (
                <tr
                  key={p.id}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="p-3">
                    {new Date(p.payment_date).toLocaleDateString()}
                  </td>
                  <td className="p-3 font-medium text-blue-600">
                    {p.transaction_id}
                  </td>
                  <td className="p-3 text-green-600">
                    ৳{(p.amount / 100).toFixed(2)}
                  </td>
                  <td className="p-3">{p.payment_method}</td>
                  <td className="p-3">{p.payment_type}</td>
                  <td className="p-3">
                    {p.payment_status ? (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        {p.payment_status}
                      </span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="p-3">{p.payment_note}</td>
                  <td className="p-3">
                    <a
                      href={p.documents}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {payments.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              No payments found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderDetailsCard;
