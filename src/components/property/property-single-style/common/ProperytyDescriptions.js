"use client";
import { useState } from "react";
import Test from "./Test";

const PropertyDescriptions = () => {
  const [activeTab, setActiveTab] = useState("item1");

  const propertyData = {
    details: {
      landSize: "1,500 sqm",
      livingSpace: "1,000 sqm",
      jungleArea: "500 sqm",
      bedrooms: 4,
      poolLength: "16 meters",
      completionDate: "April 2023",
      leaseEnd: "May 1, 2053",
      location: "North of Ubud Palace",
    },
    financials: {
      investmentValue: "6,924,510,000 BDT",
      assetPrice: "6,924,510,000 BDT",
      notaryFee: "0.75%",
      rtemisFee: "5%",
      annualReturn: "13%",
      rentalYield: "11%",
      capitalAppreciation: "2%",
    },
  };

  const tabs = [
    { id: "item1", label: "Details" },
    { id: "item2", label: "Financials" },
    { id: "item3", label: "Documents" },
    { id: "item5", label: "Timeline" },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="property-details-wrapper bg-white shadow-sm rounded-3 my-4">
      {/* Navigation Tabs */}
      <nav className="mb-4 px-3 pt-3">
        <div
          className="nav nav-pills flex-column flex-sm-row gap-2 justify-content-center"
          id="nav-tab2"
          role="tablist"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`nav-link fw-bold px-4 py-2 rounded-pill flex-grow-1 text-center ${
                activeTab === tab.id
                  ? "active bg-primary text-white"
                  : "text-dark bg-light"
              }`}
              onClick={() => handleTabClick(tab.id)}
              type="button"
              role="tab"
              aria-controls={`nav-${tab.id}`}
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Tab Content */}
      <div className="tab-content px-3 pb-3" id="nav-tabContent">
        {/* Details Tab */}
        <div
          className={`tab-pane fade ${
            activeTab === "item1" ? "show active" : ""
          }`}
          id="nav-item1"
          role="tabpanel"
          aria-labelledby="nav-item1-tab"
        >
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <h4 className="mb-3 fw-bold">About the Property</h4>
              <p className="text-muted lh-lg">
                Nestled on {propertyData.details.landSize} of land, this
                luxurious villa offers {propertyData.details.livingSpace} of
                modern living space and
                {propertyData.details.jungleArea} of private jungle. Featuring
                large glass panel windows, a fully equipped western kitchen, and
                {propertyData.details.bedrooms} spacious bedrooms with en-suite
                bathrooms, this property is a perfect blend of comfort and
                style.
              </p>
              <p className="text-muted">
                The centerpiece is a {propertyData.details.poolLength}
                -long infinity swimming pool with a sunken lounge area.
                Completed in
                {propertyData.details.completionDate}, located just 5 minutes
                from Ubud’s cultural center with lease until{" "}
                {propertyData.details.leaseEnd}.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <div className="property-specs p-3 bg-light rounded-3">
                <h5 className="mb-3">Quick Specs</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <strong>Land:</strong> {propertyData.details.landSize}
                  </li>
                  <li className="mb-2">
                    <strong>Living:</strong> {propertyData.details.livingSpace}
                  </li>
                  <li className="mb-2">
                    <strong>Bedrooms:</strong> {propertyData.details.bedrooms}
                  </li>
                  <li className="mb-2">
                    <strong>Pool:</strong> {propertyData.details.poolLength}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Financials Tab */}
        <div
          className={`tab-pane fade ${
            activeTab === "item2" ? "show active" : ""
          }`}
          id="nav-item2"
          role="tabpanel"
          aria-labelledby="nav-item2-tab"
        >
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="financial-card p-3 p-md-4 bg-light rounded-3">
                <h5 className="mb-4 fw-bold">Asset Value</h5>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex justify-content-between">
                    <span>Total Investment:</span>
                    <span>{propertyData.financials.investmentValue}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Asset Price:</span>
                    <span>{propertyData.financials.assetPrice}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Notary Fee:</span>
                    <span>{propertyData.financials.notaryFee}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Rtemis Fee:</span>
                    <span>{propertyData.financials.rtemisFee}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="financial-card p-3 p-md-4 bg-light rounded-3">
                <h5 className="mb-4 fw-bold">Annual Returns</h5>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex justify-content-between">
                    <span>Total Return:</span>
                    <span className="text-success fw-bold">
                      {propertyData.financials.annualReturn}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Rental Yield:</span>
                    <span>{propertyData.financials.rentalYield}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Capital Appreciation:</span>
                    <span>{propertyData.financials.capitalAppreciation}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documents Tab */}
        <div
          className={`tab-pane fade ${
            activeTab === "item3" ? "show active" : ""
          }`}
          id="nav-item3"
          role="tabpanel"
          aria-labelledby="nav-item3-tab"
        >
          <div className="documents-section p-3 p-md-4 bg-light rounded-3">
            <h5 className="mb-3 fw-bold">Property Documents</h5>
            <p className="text-muted">
              Villa completed: {propertyData.details.completionDate}
              <br />
              Land size: {propertyData.details.landSize}
              <br />
              Leasehold expires: {propertyData.details.leaseEnd}
              <br />
              Location: {propertyData.details.location}
            </p>
          </div>
        </div>

        {/* Timeline Tab */}
        <div
          className={`tab-pane fade ${
            activeTab === "item5" ? "show active" : ""
          }`}
          id="nav-item5"
          role="tabpanel"
          aria-labelledby="nav-item5-tab"
        >
          <Test />
        </div>
      </div>
    </div>
  );
};

export default PropertyDescriptions;
