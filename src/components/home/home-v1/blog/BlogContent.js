import Image from "next/image";
import { FaCalendar, FaShareAlt, FaTag, FaUser } from "react-icons/fa";
import BlogComment from "./BlogComment";
import RelatedBlogs from "./RelatedBlogs";

function BlogContent({ blog }) {
  return (
    <section className="py-0 ">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-8">
          <Image
            src={blog.image[0]}
            alt="Blog hero"
            width={1200}
            height={600}
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-md"
            priority
          />
          <div className="md:mt-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {blog.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <FaUser />
                <span>Admin</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span>
                  {new Date(blog.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaTag />
                <span>Event, RMG</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Content */}
          <article className="lg:w-2/3 ">
            <div className="prose prose-lg max-w-none text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
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
                    <h4 className="font-semibold text-gray-900">Admin</h4>
                    <p className="text-gray-600 text-sm">
                      Admin is a representative of The Premium Homes Limited,
                      sharing insights on real estate and industry events.
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
