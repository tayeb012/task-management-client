import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <Helmet>
        <title>Contact - SCC Technovision Inc</title>
      </Helmet>
      <h1 className="text-4xl font-bold mb-4">Contact SCC Technovision Inc.</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Company Information</h2>
        <p>
          <strong>Address:</strong> 123 Tech Street, Innovate City, CodeLand
        </p>
        <p>
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@scc-technovision.com">
            info@scc-technovision.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default Contact;
