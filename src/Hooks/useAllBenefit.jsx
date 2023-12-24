import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAllBenefit = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: allBenefits = [],
    isLoading,
  } = useQuery({
    queryKey: [`allBenefit`],
    queryFn: () => {
      const res = axiosPublic.get(`/benefitedUser`).then((result) => {
        const data = result.data;
        return data;
      });
      //   console.log(res)
      return res;
    },
  });
  return [allBenefits, isLoading];
};

export default useAllBenefit;
