import usersReducer from "store/reducers/users";
import {
  USERS_SET,
  USERS_CLEAR,
  USERS_FETCH,
  USERS_ADD
} from "store/actions/users";

const INITIAL_STATE = { meta: {}, items: [] };

it("handles actions of type USERS_SET", () => {
  const action = {
    type: USERS_SET,
    payload: { meta: { page: 1 }, items: [1, 2, 3] }
  };

  const newState = usersReducer(INITIAL_STATE, action);

  expect(newState).toEqual({ meta: { page: 1 }, items: [1, 2, 3] });
});

it("handles actions of type USERS_CLEAR", () => {
  const action = {
    type: USERS_CLEAR
  };

  const newState = usersReducer(INITIAL_STATE, action);

  expect(newState).toEqual(INITIAL_STATE);
});

it("handles actions of type USERS_FETCH", () => {
  const action = {
    type: USERS_FETCH,
    payload: { meta: { page: 2 }, items: [1, 2, 3] }
  };

  const newState = usersReducer(INITIAL_STATE, action);

  expect(newState).toEqual({ meta: { page: 2 }, items: [1, 2, 3] });
});

it("handles actions of type USERS_ADD", () => {
  const action = {
    type: USERS_ADD,
    payload: { page: 2, items: [4, 5, 6] }
  };

  const newState = usersReducer(
    { meta: { page: 2 }, items: [1, 2, 3] },
    action
  );

  expect(newState).toEqual({ meta: { page: 2 }, items: [1, 2, 3, 4, 5, 6] });
});

it("handles actions with unknown type", () => {
  const newState = usersReducer(INITIAL_STATE, {});
  expect(newState).toEqual(INITIAL_STATE);
});
