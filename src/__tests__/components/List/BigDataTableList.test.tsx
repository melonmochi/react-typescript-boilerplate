import * as React from "react";
import { mount } from "enzyme";
import { BigDataTableList } from "@/components/List";
import { MockedProvider } from "@apollo/react-testing";

import { GET_EMPLOYEES } from "@/services/GraphQL";
const mocks = [
  {
    request: {
      query: GET_EMPLOYEES
    },
    result: {
      data: {}
    }
  }
];

describe("BigDataTableList", () => {
  const bigDataTableList = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <BigDataTableList />
    </MockedProvider>
  );
  test("Snapshot", () => {
    expect(bigDataTableList).toMatchSnapshot();
  });
});
