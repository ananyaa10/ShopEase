import React from "react";
import Layout from "./../components/Layout/Layout";
import img from "../../src/assets/images.png";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-3 ">
          <img
            src={img}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to ShopEase, your one-stop shop for all your shopping needs. We pride ourselves on offering high-quality products at unbeatable prices. Our team is dedicated to providing excellent customer service and a seamless shopping experience. Thank you for choosing us for all your shopping needs!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
