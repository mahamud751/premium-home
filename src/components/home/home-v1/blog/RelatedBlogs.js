import Image from "next/image";
import Link from "next/link";

function RelatedBlogs() {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 md:mb-6">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            id: 4,
            title: "Top 5 Neighborhoods to Watch in 2025",
            image:
              "https://plus.unsplash.com/premium_photo-1733760125031-62a1611f02db?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            excerpt:
              "Explore the hottest neighborhoods for real estate investment this year.",
          },
          {
            id: 5,
            title: "How to Sell Your Home Fast",
            image:
              "https://plus.unsplash.com/premium_photo-1733760125492-79e79605f623?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            excerpt:
              "Learn expert strategies to prepare and market your home for a quick sale.",
          },
          {
            id: 6,
            title: "Renting vs. Buying: What’s Right for You?",
            image:
              "https://plus.unsplash.com/premium_photo-1733760125447-a363befe9aab?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              <Link
                href={`/blogs/${post.id}`}
                className="text-lg font-semibold text-gray-900"
              >
                {post.title}
              </Link>
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
  );
}

export default RelatedBlogs;
