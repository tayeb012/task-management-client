import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:12002",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
