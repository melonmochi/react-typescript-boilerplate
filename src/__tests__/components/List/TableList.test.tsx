import * as React from "react";
import { mount } from "enzyme";
import { TableList } from "@/components/List";
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

describe("TableList", () => {
  const tableList = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TableList />
    </MockedProvider>
  );

  test("Snapshot", () => {
    expect(tableList).toMatchSnapshot();
  });
});
