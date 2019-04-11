export const NATIONALITIES_SET = "NATIONALITIES_SET";

export function nationalitiesSet(nationalities) {
  return { type: NATIONALITIES_SET, payload: nationalities };
}
