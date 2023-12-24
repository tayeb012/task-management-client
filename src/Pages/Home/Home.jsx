import React from "react";
import Banner from "../../Components/Banner/Banner";
import BenefitedUser from "./BenefitedUser/BenefitedUser";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - SCC Technovision Inc</title>
      </Helmet>
      <Banner></Banner>
      <BenefitedUser></BenefitedUser>
    </div>
  );
};

export default Home;
