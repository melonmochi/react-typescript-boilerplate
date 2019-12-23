import { useQuery } from "@apollo/react-hooks";
import {
  EmployeesData,
  EmployeesVars,
  GET_EMPLOYEES
} from "@/services/GraphQL";

export const useGetEmployees = () => {
  const {
    data = { employees: undefined },
    error,
    loading,
    fetchMore
  } = useQuery<EmployeesData, EmployeesVars>(GET_EMPLOYEES, {
    variables: {
      first: 20
    },
    notifyOnNetworkStatusChange: true
  });

  const loadMore = () =>
    fetchMore({
      variables: { cursor: data.employees.pageInfo.endCursor },
      updateQuery: (
        previousResult: EmployeesData,
        { fetchMoreResult }: { fetchMoreResult: EmployeesData }
      ) => {
        const newEdges = fetchMoreResult.employees.edges;
        const pageInfo = fetchMoreResult.employees.pageInfo;

        return newEdges.length
          ? {
              employees: {
                ...previousResult.employees,
                edges: [...previousResult.employees.edges, ...newEdges],
                pageInfo
              }
            }
          : previousResult;
      }
    });

  return { data: data.employees, error, loading, loadMore };
};
