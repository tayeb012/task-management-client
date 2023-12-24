import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:12002",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
