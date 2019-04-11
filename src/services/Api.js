export const BASE_URL = "https://randomuser.me/api/";
export const API = {
  users: options => {
    const defaults = { page: 1, results: 100, nat: "gb,pt,ch,fr" };
    const params = {
      ...defaults,
      ...options
    };
    return `${BASE_URL}?page=${params.page}&results=${params.results}&nat=${
      params.nat
    }`;
  }
};
