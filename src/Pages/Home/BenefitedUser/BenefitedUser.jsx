import React from "react";
import useAllBenefit from "../../../Hooks/useAllBenefit";
import { Card } from "flowbite-react";

const BenefitedUser = () => {
  const [allBenefits, isLoading] = useAllBenefit();
  console.log(allBenefits);

  return (
    <div className="my-20">
      <h2 className="my-10 text-center text-3xl font-bold">Those category people get Benefited</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-between">
        {allBenefits?.map((benefit) => (
          <Card key={benefit.id} className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {benefit.category}
            </h5>
            <div>
              {benefit.benefits?.map((singleBenefit, index) => (
                <p
                  key={index}
                  className="font-normal text-gray-700 dark:text-gray-400"
                >
                  {singleBenefit}
                </p>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BenefitedUser;
