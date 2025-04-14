import Image from "next/image";
import { FaCalendar, FaShareAlt, FaTag, FaUser } from "react-icons/fa";
import BlogComment from "./BlogComment";
import RelatedBlogs from "./RelatedBlogs";

function BlogContent() {
  return (
    <section className="py-0 ">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-8">
          <Image
            src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg"
            alt="Blog hero"
            width={1200}
            height={600}
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-md"
            priority
          />
          <div className="md:mt-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Ultimate Guide to Buying Your Dream Home in 2025
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <FaUser />
                <span>John Doe</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span>April 13, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTag />
                <span>Real Estate, Home Buying</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Content */}
          <article className="lg:w-2/3 ">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl md:mb-6 mt-2 md:mt-0">
                Discover expert tips and strategies to navigate the real estate
                market and find your perfect home this year.
              </p>
              <h2>Understanding the Market</h2>
              <p>
                The real estate market in 2025 is dynamic, with trends favoring
                buyers in certain regions. Interest rates are stabilizing, and
                inventory is increasing in suburban areas, making it an ideal
                time to invest in a property.
              </p>
              <Image
                src="https://plus.unsplash.com/premium_photo-1733760125447-a363befe9aab?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Property example"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg my-6"
              />
              <h3>Key Steps to Buying a Home</h3>
              <ul>
                <li>
                  Get pre-approved for a mortgage to understand your budget.
                </li>
                <li>
                  Research neighborhoods based on amenities and future growth.
                </li>
                <li>
                  Work with a trusted real estate agent to streamline the
                  process.
                </li>
              </ul>
              <p>
                By following these steps, you’ll be well-prepared to make an
                informed decision and secure a home that meets your needs and
                budget.
              </p>
            </div>

            {/* Share Buttons */}
            <div className="mt-8 flex items-center gap-4">
              <span className="font-semibold text-gray-900">Share:</span>
              <button
                aria-label="Share on social media"
                className="text-gray-600 hover:text-blue-600"
              >
                <FaShareAlt />
              </button>
            </div>

            {/* Comment Section */}
            <BlogComment />
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-6 space-y-8">
              {/* Author Bio */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  About the Author
                </h3>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Author"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">John Doe</h4>
                    <p className="text-gray-600 text-sm">
                      John is a real estate expert with over 10 years of
                      experience helping clients find their dream homes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-blue-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
                <p className="text-sm mb-4">
                  Get the latest real estate tips and market updates.
                </p>
                <form>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 rounded-md text-gray-900 mb-4"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 font-semibold py-2 rounded-md hover:bg-gray-100"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        <RelatedBlogs />
      </div>
    </section>
  );
}

export default BlogContent;
