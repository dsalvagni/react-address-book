export const API_START = "API_START";
export const API_END = "API_END";

/**
 * When an API call starts, it set the API label to be identified on redux store
 *
 * @export apiStart
 * @param {String} label
 * @returns
 */
export function apiStart(label) {
  return { type: API_START, payload: label };
}
/**
 * When an API call ends, it set the API label to be identified on redux store
 *
 * @export
 * @param {String} label
 * @returns
 */
export function apiEnd(label) {
  return { type: API_END, payload: label };
}
