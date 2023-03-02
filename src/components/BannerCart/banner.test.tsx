import CartUser from "./index";
import { render, screen } from "@testing-library/react";
import { useDataCartQuery } from "./hooks/useFetch";
import { data } from "../../data/data.mock";

const mockedUseProduct = useDataCartQuery as jest.Mock<any>;
jest.mock("./hooks/useFetch");

afterEach(() => {
  jest.clearAllMocks();
});

test("loading", () => {
  mockedUseProduct.mockImplementation(() => ({ isLoading: true }));
  render(<CartUser />);

  expect(screen.getByRole("skaleton-container")).toBeInTheDocument()
});

test("Error request text", () => {
  mockedUseProduct.mockImplementation(() => ({ error: true }));
  render(<CartUser />);

  expect(screen.getByText(/Erro de Conexão com Serviço.../i)).toBeInTheDocument();
});

test("User card data request", () => {
  mockedUseProduct.mockImplementation(() => ({ isLoading: false, data: data }));
  render(<CartUser />);

  expect(useDataCartQuery).toHaveBeenCalled();
  expect(useDataCartQuery).toHaveBeenCalledTimes(1);

  const cardImgUser = screen.getByRole("img", {
    name: /cart\-o\.png/i,
  });

  const headerCardUser = screen.getByRole("heading", {
    name: /cartão de crédito smiles santander gold/i,
  });

  const evaluationNumberUser = screen.getByText(/5,0/i);

  const assessmentCardUser = screen.getByText(/2 avaliações/i);
  const textAnnuity = screen.getByText(/4x r\$ 88,50/i);
  const textMinimumIncome = screen.getByText(/r\$ 1\.500,00/i);

  expect(cardImgUser).toBeInTheDocument();
  expect(headerCardUser).toBeInTheDocument();
  expect(evaluationNumberUser).toBeInTheDocument();
  expect(assessmentCardUser).toBeInTheDocument();
  expect(textAnnuity).toBeInTheDocument();
  expect(textMinimumIncome).toBeInTheDocument();
}); 



