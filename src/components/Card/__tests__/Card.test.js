import React from "react";
import { mount } from "enzyme";
import Card from "./../Card";
import Thumbnail from "components/Thumbnail/Thumbnail";
import Flag from "components/Flag/Flag";
import User from "models/User";

const __user__ = {
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
    sha256: "326985caac46b864439f8adc871dd3a801d1be324f2950284f3eec235e443d08"
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
  nat: "GB"
};

describe("Card", () => {
  let user;
  beforeEach(() => {
    user = new User(__user__);
  });
  it("make sure routes are present", () => {
    const wrapped = mount(<Card user={user} />);
    expect(wrapped.find(Thumbnail).length).toEqual(1);
    expect(wrapped.find(Flag).length).toEqual(1);
    expect(wrapped.find(Flag).contains("🇬🇧")).toEqual(true);
    expect(wrapped.find("h1").contains(user.getFullName())).toEqual(true);
    expect(
      wrapped
        .find("p")
        .at(0)
        .contains(user.get("email"))
    ).toEqual(true);
    expect(
      wrapped
        .find("p")
        .at(1)
        .contains(user.getUsername())
    ).toEqual(true);
  });
});
