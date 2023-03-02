import { useQuery } from "react-query";
import { DataCartUser } from "../../../types/data.user";

const getDataCart = async (): Promise<DataCartUser> => {
  const response = await fetch(
    "https://run.mocky.io/v3/64c93785-4849-4730-a9cb-d04d6bc38408"
  );
  return response.json();
};

export const useDataCartQuery = () =>
  useQuery({
    queryKey: ["dataCarUser"],
    queryFn: () => getDataCart(),
  });

