import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>Privacy Policy</h1>
          <p>"We respect your privacy and are committed to protecting your personal information. We collect and use your data solely for processing orders and enhancing your shopping experience. Your information will never be sold or shared with third parties without your consent. By using our website, you agree to our privacy practices."</p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
