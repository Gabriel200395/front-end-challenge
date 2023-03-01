export const formatNumber = (value: string | undefined) =>
  Number(value).toFixed(1).replace(".", ",");
