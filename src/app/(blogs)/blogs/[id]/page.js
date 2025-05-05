"use client";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import BlogContent from "@/components/home/home-v1/blog/BlogContent";
import { useAuth } from "@/hooks/auth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";

const SingleBlog = () => {
  const { id } = useParams();
  const { token } = useAuth();

  const fetchSingleProduct = async (id, token) => {
    const response = await axios.get(
      `https://premium.samironbarai.xyz/v1/blogs/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  };
  const { data: blog } = useQuery({
    queryKey: ["single-blog", id],
    queryFn: () => fetchSingleProduct(id, token),
    enabled: !!id && !!token,
  });

  console.log("blog", blog);

  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Blog</h2>
                <div className="breadcumb-list">
                  <Link href="/">Home</Link>
                  <Link href="/blogs">Blogs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* blog content content */}
      <BlogContent />

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default SingleBlog;
