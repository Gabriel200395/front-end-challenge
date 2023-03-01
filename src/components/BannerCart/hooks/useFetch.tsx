import { useQuery } from "react-query";
import axios from "axios";
import { DataCartUser } from "../../../types/data.user";

export default function useFetch() {
  async function getCartData() {
    const response = await axios.get<DataCartUser>(
      "https://run.mocky.io/v3/64c93785-4849-4730-a9cb-d04d6bc38408"
    );
    return response.data;
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["dataCarUser"],
    queryFn: getCartData,
  });

  return {
    data,
    error,
    isLoading,
  };
}
