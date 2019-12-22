import { useQuery } from "@apollo/react-hooks";
import {
  EmployeesData,
  EmployeesVars,
  GET_EMPLOYEES
} from "@/services/GraphQL";

export const useGetEmployees = () => {
  const { data, error, loading } = useQuery<EmployeesData, EmployeesVars>(
    GET_EMPLOYEES
  );

  return { data: data && data.employees, error, loading };
};
