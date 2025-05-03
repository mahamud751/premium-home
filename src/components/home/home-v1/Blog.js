"use client";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogsData, setBlogsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          "https://premium.samironbarai.xyz/v1/blogs"
        );
        setBlogsData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch FAQ data");
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  if (loading) {
    return (
      <section className="our-faq pt-0 py-12 md:px-4">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center">Loading Blogs...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="our-faq pt-0 py-12 md:px-4">
        <div className="container mx-auto max-w-7xl">
          <p className="text-center text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <>
      {blogsData?.map((blog) => {
        const date = moment(blog?.created_at);
        const month = date.format("MMMM");
        const day = date.format("DD");
        return (
          <div className="col-sm-6 col-lg-4" key={blog?.id}>
            <Link href={`/blogs/${blog?.id}`}>
              <div className="blog-style1">
                <div className="blog-img">
                  <Image
                    width={386}
                    height={271}
                    className="w-100 h-100 cover"
                    src={blog?.image}
                    alt={blog?.title}
                  />
                </div>
                <div className="blog-content">
                  <div className="date">
                    <span className="month">{month}</span>
                    <span className="day">{day}</span>
                  </div>
                  <a className="tag" href="#">
                    {blog?.title}
                  </a>
                  <h6 className="title mt-1">
                    <Link href={`/blogs/${blog?.id}`}>{blog?.content}</Link>
                  </h6>
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
