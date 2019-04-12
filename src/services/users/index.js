/** 
 * Service layer to manage users' catalog data.
 * Simple implementation to keep the methods/functions that process users entity data 
 * centralized.
 * 
 * Both buffer and collection are re-instantiated whenever the first page is loaded.
*/

/**
 * @typedef {Object} UsersDataMeta
 * @property {number} page Current page
 * @property {number} results Total of results of this page
 */

/**
 * @typedef {Object} UsersData
 * @property {UsersDataMeta} meta Information about page & count
 * @property {User[]} items List of users
 */

import axios from "axios";
import User from "models/User";
import { API } from "services/Api";
import Config from "config";

/** Set the path for this data on Redux */
export const STORE_PATH = "USERS";

/** 
 * Keeps the extra results loaded on a buffer collection,
 * as we are going to use this buffer to slice the X items per page.
*/
let buffer = [];
/** 
 * Keeps all loaded items. 
*/
let collection = [];

/**
 * Process data from server.
 * First, sets the loaded items to the buffer and to the main collection.
 * If this is the first page call, it's going to set the UsersData.items as a slice of 
 * buffer. If not, will return the full list of items there - as this is going to feed the store.
 *
 * @param {APIServerResponse} response
 * @returns {UsersData}
 */
function processResponse(response) {
  const results = response.data.results.map(c => new User(c));
  const isFirstPage = response.data.info.page === 1;
  const data = {};

  if (isFirstPage) {
    buffer = [];
    collection = [];
  }

  buffer = buffer.concat(results);
  collection = collection.concat(results);

  data.meta = response.data.info;

  data.items = isFirstPage
    ? getFromBuffer(Config.contactsPerPage)
    : results;

  return data;
}

/**
 * Get the {max} items from the buffer.
 * The {max} items are going to be removed from buffer as well.
 * 
 * @param {number} max
 * @returns {User[]}
 */
function getFromBuffer(max) {
  return buffer.splice(0, max);
}

/**
 * Loads the next batch of results.
 * It's going to load from BE under the hoods while it gets items from the buffer
 * to display as next page.
 *
 * @export load
 * @param {APIUsersOptions} options
 * @returns {Promise}
 */
export function load(options) {
  return new Promise((resolve, reject) => {
    try {
      const total_loaded = collection.length + buffer.length;
      if (total_loaded < Config.contactsLimit) fetch(options);
      resolve({
        page: options.page,
        items: getFromBuffer(Config.contactsPerPage)
      });
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Fetch users' catalog from API
 * @export fetch
 * @param {APIUsersOptions} options
 * @returns {Promise}
 */
export function fetch(options) {
  const defaults = { page: 1, results: 100 };
  const filter = {
    ...defaults,
    ...options
  };
  return axios.get(API.users(filter)).then(processResponse);
}

/**
 * Returns a user if find it by its username
 *
 * @export getByUsername
 * @param {Redux} state
 * @param {string} username
 * @returns {User}
 */
export function getByUsername(state, username) {
  return [...state[STORE_PATH].items].find(i => {
    return i.getUsername() === username;
  });
}


/**
 * Returns the information from this service from the store.
 *
 * @export get
 * @param {Redux} state
 * @param {Function} filter
 * @returns {UsersData}
 */
export function get(state, filter) {
  const data = { ...state[STORE_PATH] };
  if (filter) data.items = data.items.filter(filter);

  return data;
}

/**
 * Filter a User[] collection by User.getFullName() for a given query
 * It's going to return a predicator (function) to be used on Array.prototype.filter
 * @export filterByFullName
 * @param {string} query
 * @returns {function}
 */
export function filterByFullName(query) {
  return model =>
    query
      ? model
          .getFullName()
          .toLowerCase()
          .indexOf(query.toLowerCase()) >= 0
      : true;
}
