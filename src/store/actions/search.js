export const QUERY_SET = "QUERY_SET";

/**
 * Set the query string that is used on search
 *
 * @export querySet
 * @param {string} query
 * @returns
 */
export function querySet(query) {
  return { type: QUERY_SET, payload: { query } };
}
