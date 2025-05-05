import React from "react";

const PropertyDetails = ({ product }) => {
  const defaultData = {
    id: "N/A",
    total_price: "N/A",
    flat_size: "N/A",
    bathroom: "N/A",
    bedroom: "N/A",
    car_parking: false,
    created_at: "N/A",
    flat_type: "N/A",
    status: "N/A",
  };

  const data = product || defaultData;

  const columns = [
    [
      {
        label: "Property ID",
        value: data.id,
      },
      {
        label: "Price",
        value: data.total_price
          ? `${data.total_price.toLocaleString()} ৳`
          : "N/A",
      },
      {
        label: "Property Size",
        value: data.flat_size ? `${data.flat_size} Sq Ft` : "N/A",
      },
      {
        label: "Bathrooms",
        value: data.bathroom,
      },
      {
        label: "Bedrooms",
        value: data.bedroom,
      },
    ],
    [
      {
        label: "Garage",
        value: data.car_parking ? "Yes" : "No",
      },
      {
        label: "Garage Size",
        value: "N/A",
      },
      {
        label: "Year Built",
        value: data.created_at
          ? new Date(data.created_at).getFullYear()
          : "N/A",
      },
      {
        label: "Property Type",
        value: data.flat_type || "N/A",
      },
      {
        label: "Property Status",
        value: data.status || "N/A",
      },
    ],
  ];

  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`col-md-6 col-xl-4${
            columnIndex === 1 ? " offset-xl-2" : ""
          }`}
        >
          {column.map((detail, index) => (
            <div key={index} className="d-flex justify-content-between">
              <div className="pd-list">
                <p className="fw600 mb10 ff-heading dark-color">
                  {detail.label}
                </p>
              </div>
              <div className="pd-list">
                <p className="text mb10">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
