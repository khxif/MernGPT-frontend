import { fetchUser } from "@/lib/fetchers";
import useSWR from "swr";

export const useUser = () => {
  const { data, error, isLoading } = useSWR(`/api/user/auth-status`, fetchUser);

  return {
    data,
    isLoading,
    isError: error,
  };
};
