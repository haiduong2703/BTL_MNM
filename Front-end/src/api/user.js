import axiosClient from "./axiosClient";

const END_POINT = {
  USER: "Taikhoan",
};

export const signUpUser = (data) => {
  return axiosClient.post(
    `https://localhost:44396/api/${END_POINT.USER}`, data
  );
};
