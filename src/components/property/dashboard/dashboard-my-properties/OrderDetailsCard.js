"use client";

import { useAuth } from "@/hooks/auth";
import axios from "axios";
import { useEffect, useState } from "react";

const OrderDetailsCard = ({ id }) => {
  const { token } = useAuth();
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(order)

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(
          `https://premium.samironbarai.xyz/v1/orders/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrder(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch banner data");
        setLoading(false);
      }
    };

    fetchOrderData();
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
            <p className="text-2xl font-bold text-yellow-500">
              {order?.emi_amount}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">
              Paid Amount
            </h2>
            <p className="text-2xl font-bold text-green-500">
              {order?.paid_amount}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-600 mb-2">
              Due Amount
            </h2>
            <p className="text-2xl font-bold text-red-500">
              {order?.due_amount}
            </p>
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
                <span className="font-medium">Unit Price:</span> BDT{" "}
                {order.unit_price.toLocaleString()}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Total Price:</span> BDT{" "}
                {order.total_price.toLocaleString()}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Parking Charge:</span> BDT{" "}
                {order.parking_charge.toLocaleString()}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Utility Charge:</span> BDT{" "}
                {order.utility_charge.toLocaleString()}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Other Charges:</span> BDT{" "}
                {order.other_charge.toLocaleString()}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Discount:</span> BDT{" "}
                {order.discount.toLocaleString()}
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
    </section>
  );
};

export default OrderDetailsCard;
