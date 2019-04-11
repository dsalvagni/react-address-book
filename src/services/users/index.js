import axios from "axios";
import User from "models/User";
import { API } from "services/Api";
import Config from "config";

export const STORE_PATH = "USERS";

let buffer = [];
let collection = [];

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
    : response.data.results.map(c => new User(c));

  return data;
}

function getFromBuffer(sliceOf) {
  return buffer.splice(0, sliceOf);
}

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

export function fetch(options) {
  const defaults = { page: 1, results: 100 };
  const filter = {
    ...defaults,
    ...options
  };
  return axios.get(API.users(filter)).then(processResponse);
}

export function getByUsername(state, username) {
  return [...state[STORE_PATH].items].find(i => {
    return i.getUsername() === username;
  });
}

export function get(state, filter) {
  const data = { ...state[STORE_PATH] };
  if (filter) data.items = data.items.filter(filter);

  return data;
}

export function filterByFullName(query) {
  return model =>
    query
      ? model
          .getFullName()
          .toLowerCase()
          .indexOf(query.toLowerCase()) >= 0
      : true;
}
