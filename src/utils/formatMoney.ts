export const formatMoney = (value: number | undefined) =>
  value?.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
