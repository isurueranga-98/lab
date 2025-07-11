import useSWR from "swr";
import { readAvailableTests } from "@/lib/actions/available-tests/read-available-tests";

export const useAvailableTests = () => {
  const { data, error, isLoading } = useSWR(
    "available-tests",
    readAvailableTests,
  );

  return {
    availableTests: data,
    error,
    loading: isLoading,
  };
};
