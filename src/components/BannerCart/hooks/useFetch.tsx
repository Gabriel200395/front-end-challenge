import { useQuery } from "react-query";
import { DataCartUser } from "../../../types/data.user";

export default function useFetch() {
  async function getDataCartUser() {
    const data = await fetch(
      "https://run.mocky.io/v3/64c93785-4849-4730-a9cb-d04d6bc38408"
    );

    let response = await data.json();

    return response as DataCartUser;
  }

  const { data, error, isLoading } = useQuery("dataCartUser", getDataCartUser);

  return {
    data,
    error,
    isLoading,
  };
}
