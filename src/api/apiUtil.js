import axios from "axios";
import Cookies from "universal-cookie";

const base = "https://cryptic-everglades-12689.herokuapp.com/api/v1";
const cookies = new Cookies();

const createApiClient = () =>
  axios.create({
    baseURL: base,
    // withCredentials: true,
    contentType: 'application/json',
    headers: {
      "Content-Type": "application/json"
    }
  });

/**
 * Get axios client instance
 * @returns {AxiosInstance}
 */

export const getApiClient = () => {
  const apiClient = createApiClient();
  return apiClient;
  // apiClient.interceptors.request.use(
  //   (request) => {
  //     request.headers.Cookie = ctx.req.headers.cookie;
  //     const csrfCookie = cookies(ctx).csrftoken;
  //     if (csrfCookie) {
  //       request.headers["X-CSRFToken"] = csrfCookie;
  //     }
  //     return request;
  //   },
  //   (error) => {
  //     console.log(error);
  //     throw error;
  //   }
  // );
  // apiClient.interceptors.response.use(
  //   (response) => {
  //     if (response.headers["Set-Cookie"]) {
  //       ctx.res.setHeader("Set-Cookie", response.headers["Set-Cookie"]);
  //     }
  //     return response;
  //   },
  //   (error) => {
  //     console.log(`HTTP Failed: ${error.request.method} ${error.request.path}`);
  //     if (error.response) {
  //       console.log(error.response.data);
  //     } else {
  //       console.log(error);
  //     }
  //     throw error;
  //   }
  // );
  // return apiClient;
};