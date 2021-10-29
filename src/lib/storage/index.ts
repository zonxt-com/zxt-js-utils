import Storage from "./storage";

/**
 * Local storage default cache time
 * */
const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

/**
 * Create local storage
 * @param {string} prefixKey
 * @returns {Object} storage sessionStorage | localStorage
 * @param {number} expire cache expire time
 */
export const createStorage = ({
  prefixKey = "",
  storage = localStorage,
  expire = DEFAULT_CACHE_TIME,
} = {}) => {
  return new Storage(prefixKey, storage, expire);
};
