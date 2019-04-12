/**
 * Wrapps the ES6 spread operator in a function, as this comes in handy when
 * a more complex manipulation of the state object is required.
 * @param {object} oldObject
 * @param {object} newValues
 * @returns
 */
const updateObject = (oldObject, newValues) => {
  return {
    ...oldObject,
    ...newValues
  };
};
export default updateObject;
