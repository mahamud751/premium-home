import { FaPhone, FaUser, FaWhatsapp } from "react-icons/fa";

const DetailsRightSide = () => {
  return (
    <div>
      {/* End nav-pills */}

      {/* End .col-12 */}

      <div className="row wrap">
        <div className="col-lg-6">
          <span className="me-2">ERY (Annual)</span>
          <i className="fa-solid fa-circle-info"></i>
        </div>
        <div className="col-lg-6 text-end">
          {" "}
          <span className="fs-5 text-thm">11%</span>
        </div>
      </div>
      <div className="row wrap my-3">
        <div className="col-lg-6">
          <span className="me-2 ">ECY (Annual)</span>
          <i className="fa-solid fa-circle-info"></i>
        </div>
        <div className="col-lg-6 text-end">
          {" "}
          <span className="fs-5 text-thm">2%</span>
        </div>
      </div>
      <div className="row wrap ">
        <div className="col-lg-6">
          <span className="me-2">IRR (Annual)</span>
          <i className="fa-solid fa-circle-info"></i>
        </div>
        <div className="col-lg-6 text-end">
          {" "}
          <span className="fs-5 text-thm">13%</span>
        </div>
      </div>
      <div className="col-md-12 mt-3">
        <div className="d-grid">
          <button type="submit" className="ud-btn btn-thm p-2">
            Invest Now
          </button>
          {/* <button
            type="submit"
            className="ud-btn btn-thm mt-3 border-0 p-2"
            style={{ background: "#878787" }}
          >
            Set Property
          </button> */}
          <div className="text-center mt-2">
            <span className="text fz14">BDT10,000 minimum</span>
          </div>
        </div>
      </div>
      <div className="col-md-12 mt-3">
        <div className="d-grid">
          <div className="  ">
            {/* Heading */}
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              For Any Inquiry
            </h3>

            {/* Name Section */}
            <div className="flex items-center mb-2">
              <FaUser className="text-gray-600 mr-2" size={16} />
              <p className="text-sm text-gray-800">
                <span className="font-medium">Name:</span> Md. Sajal Ali
              </p>
            </div>

            {/* Phone Section */}
            <div className="flex items-center mb-3">
              <FaPhone className="text-gray-600 mr-2" size={16} />
              <p className="text-sm text-blue-600">
                <span className="font-medium text-gray-800 ">Call:</span>{" "}
                01896063449
              </p>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/01896063449"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition"
            >
              <FaWhatsapp className="mr-2" size={16} />
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
      {/* End .col-12 */}
    </div>
  );
};

export default DetailsRightSide;
