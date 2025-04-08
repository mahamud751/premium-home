import DefaultHeader from "@/components/common/DefaultHeader";

import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

export const metadata = {
  title: "Gird Full 3 Column || Homez - Real Estate NextJS Template",
};

const SingleDetailsPage = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}
      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}
      
      {/* content here */}


      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default SingleDetailsPage;
