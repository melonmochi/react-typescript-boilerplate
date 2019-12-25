import * as React from "react";
import { mount } from "enzyme";
import { MockedProvider } from "@apollo/react-testing";
import { TableListPage } from "@/pages";
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

jest.mock("react-router", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("TableListPage", () => {
  const tableListPage = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TableListPage />
    </MockedProvider>
  );
  test("Snapshot", () => {
    expect(tableListPage).toMatchSnapshot();
  });
});
