import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllTask = () => {
  const axiosSecure = useAxiosSecure();
//   console.log("Before useQuery");
  // tanStack query
  const {
    data: allTask = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [`allContestData`],
    queryFn: () => {
      const res = axiosSecure.get(`/getAllTask`).then((result) => {
        const data = result.data;
        return data;
      });
      //   console.log(res)
      return res;
    },
  });
  return [allTask, refetch, isLoading];
};

export default useAllTask;
