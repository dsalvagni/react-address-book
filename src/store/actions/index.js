export const API_START = "API_START";
export const API_END = "API_END";

export function apiStart(label) {
  return { type: API_START, payload: label };
}
export function apiEnd(label) {
  return { type: API_END, payload: label };
}