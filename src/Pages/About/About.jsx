import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <Helmet>
        <title>About - SCC Technovision Inc</title>
      </Helmet>
      <h1 className="text-4xl font-bold mb-4">About SCC Technovision Inc.</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Company Overview</h2>
        <p>
          Welcome to SCC Technovision Inc., where we are dedicated to creating
          innovative solutions that enhance and streamline task management.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Platform Purpose</h2>
        <p>
          Our Task Management Platform is designed to empower users in
          efficiently managing their tasks and collaborating seamlessly with
          their teams. We believe in providing a user-friendly and collaborative
          experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Technology Stack</h2>
        <p>
          The platform is built using React.js for the frontend, and the backend
          is powered by Express, Node.js, and MongoDB. Our technology stack is
          chosen to ensure a robust and scalable solution.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
        <p>
          Have questions or suggestions? Feel free to reach out to us at{" "}
          <a href="mailto:info@scc-technovision.com">
            info@scc-technovision.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default About;
