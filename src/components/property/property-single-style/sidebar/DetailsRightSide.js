import { FaPhone, FaUser, FaWhatsapp, FaInfoCircle } from "react-icons/fa";

const DetailsRightSide = () => {
  return (
    <>
      {/* Financial Metrics Section */}
      <div className="space-y-4 mb-6">
        {[
          { label: "ERY (Annual)", value: "11%" },
          { label: "ECY (Annual)", value: "2%" },
          { label: "IRR (Annual)", value: "13%" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition"
          >
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 font-medium">{item.label}</span>
              <FaInfoCircle className="text-gray-500 cursor-pointer hover:text-blue-600" />
            </div>
            <span className="text-xl font-semibold text-blue-600">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="space-y-3 mb-6">
        <button type="submit" className="ud-btn btn-thm p-2 w-full">
          Invest Now
        </button>
        <div className="text-center">
          <span className="text-sm text-gray-600">BDT 10,000 minimum</span>
        </div>
      </div>

      {/* Inquiry Section */}
      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          For Any Inquiry
        </h3>
        <div className="space-y-3">
          {/* Name */}
          <div className="flex items-center space-x-3">
            <FaUser className="text-gray-600" size={18} />
            <p className="text-gray-800">
              <span className="font-medium">Name:</span> Md. Sajal Ali
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <FaPhone className="text-gray-600" size={18} />
            <p className="text-gray-800">
              <span className="font-medium">Call:</span>{" "}
              <a
                href="tel:01896063449"
                className="text-blue-600 hover:underline"
              >
                01896063449
              </a>
            </p>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/01896063449"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <FaWhatsapp className="mr-2" size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default DetailsRightSide;
