"use client";

import listings from "@/data/listings";
import React from "react";

const PropertyHeader = ({ id }) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
        {/* Left Section */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {data.title}
            </h2>

            {/* Location and Status */}
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="flex items-center text-gray-600 text-sm">
                <i className="fas fa-map-marker-alt mr-2 text-indigo-500" />
                {data.location}
              </span>
              <span className="flex items-center text-gray-600 text-sm">
                <i className="fas fa-tag mr-2 text-indigo-500" />
                For {data.forRent ? "rent" : "sale"}
              </span>
              <span className="flex items-center text-gray-600 text-sm">
                <i className="far fa-calendar mr-2 text-indigo-500" />
                {Number(new Date().getFullYear()) -
                  Number(data.yearBuilding)}{" "}
                years ago
              </span>
              <span className="flex items-center text-gray-600 text-sm">
                <i className="fas fa-ruler-combined mr-2 text-indigo-500" />
                8721
              </span>
            </div>

            {/* Property Specs */}
            <div className="grid grid-cols-3 gap-4 border-t pt-4">
              <div className="text-center">
                <i className="flaticon-bed text-xl text-indigo-500 mb-1" />
                <p className="text-gray-700 font-medium">{data.bed} Bed</p>
              </div>
              <div className="text-center">
                <i className="flaticon-shower text-xl text-indigo-500 mb-1" />
                <p className="text-gray-700 font-medium">{data.bath} Bath</p>
              </div>
              <div className="text-center">
                <i className="flaticon-expand text-xl text-indigo-500 mb-1" />
                <p className="text-gray-700 font-medium">{data.sqft} Sqft</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-80 ">
          <div className="bg-indigo-50 flex flex-col items-center justify-center lg:h-[250px] rounded-xl p-6 sticky top-6">
            {/* Price */}
            <div className="text-center mb-4">
              <h3 className="text-3xl font-bold text-indigo-700">
                {data.price}
              </h3>
              <p className="text-sm text-gray-600">
                $
                {(
                  Number(data.price.split("$")[1].split(",").join("")) /
                  data.sqft
                ).toFixed(2)}
                /sq ft
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <button className="p-2 hover:bg-indigo-100 rounded-full transition-colors">
                <span className="flaticon-like text-indigo-600" />
              </button>
              <button className="p-2 hover:bg-indigo-100 rounded-full transition-colors">
                <span className="flaticon-new-tab text-indigo-600" />
              </button>
              <button className="p-2 hover:bg-indigo-100 rounded-full transition-colors">
                <span className="flaticon-share-1 text-indigo-600" />
              </button>
              <button className="p-2 hover:bg-indigo-100 rounded-full transition-colors">
                <span className="flaticon-printer text-indigo-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
