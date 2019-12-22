import { message } from "antd";
import { useEffect } from "react";
import { ApolloError } from "apollo-boost";

interface useRequestProps {
  error: ApolloError;
  isLoading: boolean;
  setState: React.Dispatch<React.SetStateAction<any>>;
  state: {};
}
export const useRequest = (props: useRequestProps) => {
  const { error, isLoading, setState, state } = props;
  useEffect(() => {
    error && message.info(error);
  }, [error]);

  useEffect(() => {
    setState({ ...state, loading: isLoading });
  }, [isLoading]);
};
