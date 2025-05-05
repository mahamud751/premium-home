import React from "react";

const OverView = ({ product }) => {
  const defaultData = {
    bedroom: "N/A",
    bathroom: "N/A",
    flat_size: "N/A",
    created_at: "N/A",
    flat_type: "N/A",
    car_parking: false,
  };

  const data = product || defaultData;

  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Bedroom",
      value: data.bedroom,
    },
    {
      icon: "flaticon-shower",
      label: "Bath",
      value: data.bathroom,
    },
    {
      icon: "flaticon-event",
      label: "Year Built",
      value: data.created_at ? new Date(data.created_at).getFullYear() : "N/A",
    },
    {
      icon: "flaticon-garage",
      label: "Garage",
      value: data.car_parking ? "Yes" : "No",
      xs: true,
    },
    {
      icon: "flaticon-expand",
      label: "Sqft",
      value: data.flat_size,
      xs: true,
    },
    {
      icon: "flaticon-home-1",
      label: "Property Type",
      value: data.flat_type || "N/A",
    },
  ];

  return (
    <>
      {overviewData.map((item, index) => (
        <div
          key={index}
          className={`col-sm-6 col-lg-4 ${item.xs ? "mb25-xs" : "mb25"}`}
        >
          <div className="overview-element d-flex align-items-center">
            <span className={`icon ${item.icon}`} />
            <div className="ml15">
              <h6 className="mb-0">{item.label}</h6>
              <p className="text mb-0 fz15">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OverView;
