import React from "react";
import { shallow } from "enzyme";
import WeatherComponent from "./WeatherComponent";

describe("WeatherComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WeatherComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
