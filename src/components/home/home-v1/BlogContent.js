import React from "react";
import { FaUser, FaCalendar, FaTag, FaShareAlt } from "react-icons/fa";
import Image from "next/image";

function BlogContent() {
  return (
    <section className="py-0 ">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-8">
          <Image
            src="/images/background/compare-bg.jpg"
            alt="Blog hero"
            width={1200}
            height={600}
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-md"
            priority
          />
          <div className="mt-6">
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
          <article className="lg:w-2/3">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
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
                src="/images/blog/blog-1.jpg"
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
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Leave a Comment
              </h2>
              <form className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    placeholder="Your Comment"
                    rows="5"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
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
                    src="/images/our-teams/attorney_one.png"
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
        <div className="my-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Top 5 Neighborhoods to Watch in 2025",
                image: "/images/blog/blog-1.jpg",
                excerpt:
                  "Explore the hottest neighborhoods for real estate investment this year.",
              },
              {
                title: "How to Sell Your Home Fast",
                image: "/images/blog/blog-1.jpg",
                excerpt:
                  "Learn expert strategies to prepare and market your home for a quick sale.",
              },
              {
                title: "Renting vs. Buying: What’s Right for You?",
                image: "/images/blog/blog-1.jpg",
                excerpt:
                  "A detailed comparison to help you make the best housing decision.",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
