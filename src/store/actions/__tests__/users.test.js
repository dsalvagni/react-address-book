import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import {
  usersSet,
  usersClear,
  usersFetch,
  usersLoadMore,
  USERS_SET,
  USERS_CLEAR,
  USERS_FETCH,
  USERS_ADD
} from "store/actions/users";

import { INITIAL_STATE } from "store/reducers/users";

import { fetch, load, STORE_PATH } from "services/users";
import { API_START, API_END, apiStart, apiEnd } from "store/actions";
import { API } from "services/Api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let ___serverResponse___ = {
  results: [
    {
      gender: "male",
      name: { title: "mr", first: "oliver", last: "hall" },
      location: {
        street: "6024 northcote road",
        city: "gisborne",
        state: "auckland",
        postcode: 25864,
        coordinates: { latitude: "67.2495", longitude: "-45.2271" },
        timezone: {
          offset: "-4:00",
          description: "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      email: "oliver.hall@example.com",
      login: {
        uuid: "c3499302-57f8-4f9b-a3ae-d93990fba1d3",
        username: "purplewolf851",
        password: "charlie",
        salt: "uB8G0KQ5",
        md5: "b16955c91e0cdb8d339ef67da2691765",
        sha1: "79466d8bc71b1eeed68de76270f297ae826dd897",
        sha256:
          "326985caac46b864439f8adc871dd3a801d1be324f2950284f3eec235e443d08"
      },
      dob: { date: "1974-10-01T13:00:10Z", age: 44 },
      registered: { date: "2005-11-25T03:27:07Z", age: 13 },
      phone: "(609)-761-8237",
      cell: "(251)-650-2707",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/men/58.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/58.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/58.jpg"
      },
      nat: "NZ"
    }
  ],
  info: { seed: "ba4c1b2e2cd39356", results: 1, page: 1, version: "1.2" }
};

describe("usersSet", () => {
  let payload;
  afterEach(() => {
    payload = {};
  });

  it("has the correct type", () => {
    const action = usersSet();
    expect(action.type).toEqual(USERS_SET);
  });

  it("has the correct payload", () => {
    payload = {
      meta: {
        page: 1
      },
      items: [1, 2, 3]
    };
    const action = usersSet(payload);
    expect(action.payload).toEqual(payload);
  });
});

describe("usersClear", () => {
  let payload;
  afterEach(() => {
    payload = {};
  });

  it("has the correct type", () => {
    const action = usersClear();
    expect(action.type).toEqual(USERS_CLEAR);
  });

  it("has no payload", () => {
    const action = usersClear();
    expect(action.payload).toBeUndefined();
  });
});

describe("usersFetch", () => {
  let payload;
  beforeEach(() => {
    moxios.install();
    payload = {
      meta: ___serverResponse___.info,
      items: ___serverResponse___.results
    };
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("fetches data from server", () => {
    moxios.stubRequest(API.users({ page: 1, results: 100 }), {
      status: 200,
      responseText: JSON.stringify(___serverResponse___)
    });

    const store = mockStore(INITIAL_STATE);

    const expectedAction = [
      { type: API_START, payload: "usersIsLoading" },
      { type: USERS_FETCH, payload: payload },
      { type: API_END, payload: "usersIsLoading" }
    ];

    return store.dispatch(usersFetch({ page: 1, results: 100 })).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
