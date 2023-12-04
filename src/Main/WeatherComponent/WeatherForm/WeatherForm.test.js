import React from "react";
import { shallow } from "enzyme";
import WeatherForm from "./WeatherForm";

describe("WeatherForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WeatherForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
