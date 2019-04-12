export const NATIONALITIES_SET = "NATIONALITIES_SET";

/**
 * Set the nationalities that should be considered on API call
 *
 * @export nationalitiesSet
 * @param {Object} nationalities
 * @returns
 */
export function nationalitiesSet(nationalities) {
  return { type: NATIONALITIES_SET, payload: nationalities };
}
