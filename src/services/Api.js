export const BASE_URL = "https://randomuser.me/api/";
/**
 * @typedef {Object} APIUsersOptions
 * @property {number} page Load items from this page number
 * @property {number} results Total of items to be loaded
 * @property {string} nat Comma separated list of nationalities (abbrv.) to be filtered
 */
/**
 * @typedef {Object} APIServerResponseInfo
 * @property {number} page Number of the page
 * @property {number} results Total of items loaded
 * @property {string} version Api Version
 * @property {string} seed Seed that was used
 */
/**
 * @typedef {Object} APIServerResponse
 * @property {array} results List of items
 * @property {APIServerResponseInfo} info Total of items to be loaded
 */

 /** 
  * Manages API urls for this app
 */
export const API = {
  /** 
   * Builds the users API url
   * @param {APIUsersOptions} options
   * @returns {string}
  */
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
