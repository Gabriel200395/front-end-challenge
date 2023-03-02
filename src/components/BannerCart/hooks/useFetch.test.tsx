import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useDataCartQuery } from "./useFetch";
import { data } from "../../../helpers/data.mock";

const queryClient = new QueryClient();
const wrapper = ({ children }: any) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

test("search user card data", async () => {
  const { result } = renderHook(() => useDataCartQuery(), { wrapper });

/*   await waitFor(() => expect(result.current.isSuccess).toBe(true));

  expect(result.current.data).toEqual(data);
 */});
