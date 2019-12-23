import gql from "graphql-tag";
import { ConnectionType } from "..";
import { Department } from "@/services/GraphQL/departments";

type GenderType = "M" | "F";

export interface Employee {
  empNo: string;
  birthDate: Date;
  firstName: string;
  lastName: string;
  gender: GenderType;
  hireDate: Date;
  department: Department;
  isManager: boolean;
}

export type EmployeesData = {
  employees: ConnectionType<Employee>;
};

export interface EmployeesVars {
  first: number;
}

export const GET_EMPLOYEES = gql`
  query Employees($first: Int!, $cursor: String) {
    employees(first: $first, after: $cursor) {
      totalCount
      edges {
        node {
          empNo
          birthDate
          firstName
          lastName
          gender
          hireDate
          department {
            deptNo
            deptName
          }
          isManager
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
