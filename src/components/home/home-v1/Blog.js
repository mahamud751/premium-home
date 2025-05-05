"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const fetchBlogs = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASEURL}/v1/blogs`
  );
  return response.data.data;
};

const Blog = () => {
  const pathname = usePathname();

  const {
    data: blogsData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });

  if (isLoading) {
    return (
      <section className="our-faq pt-0 py-12 md:px-4">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center">Loading Blogs...</p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="our-faq pt-0 py-12 md:px-4">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center text-red-600">
            Error loading blogs: {error?.message || "Something went wrong"}
          </p>
        </div>
      </section>
    );
  }

  const dataToShow = pathname === "/" ? blogsData?.slice(0, 3) : blogsData;

  return (
    <>
      {dataToShow?.map((blog) => {
        const date = moment(blog?.created_at);
        const month = date.format("MMMM");
        const day = date.format("DD");
        // Sanitize the HTML content

        return (
          <div className="col-sm-6 col-lg-4" key={blog?.id}>
            <Link href={`/blogs/${blog?.id}`}>
              <div className="blog-style1">
                <div className="blog-img">
                  {blog?.image?.[0] ? (
                    <Image
                      width={386}
                      height={271}
                      className="w-100 h-72 cover"
                      src={blog.image[0]} // Access the first image in the array
                      alt={blog?.title || "Blog image"}
                      onError={(e) => {
                        e.target.src = "/fallback-image.jpg"; // Fallback image
                      }}
                    />
                  ) : (
                    <Image
                      width={386}
                      height={271}
                      className="w-100 h-100 cover"
                      src="/fallback-image.jpg" // Fallback image if no image is available
                      alt="No image available"
                    />
                  )}
                </div>
                <div className="blog-content">
                  <div className="date">
                    <span className="month">{month}</span>
                    <span className="day">{day}</span>
                  </div>
                  <a className="tag" href="#">
                    {blog?.title}
                  </a>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Blog;
