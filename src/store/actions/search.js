export const QUERY_SET = "QUERY_SET";

export function querySet(query) {
  return { type: QUERY_SET, payload: { query } };
}
